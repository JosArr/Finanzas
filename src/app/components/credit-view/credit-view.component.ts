import {Component, OnInit} from '@angular/core';
import {Credit} from "../../models/models/credit";
import {CreditService} from "../../services/CreditService/credit.service";

@Component({
  selector: 'app-credit-view',
  templateUrl: './credit-view.component.html',
  styleUrls: ['./credit-view.component.css']
})
export class CreditViewComponent implements OnInit {
  credits: Credit[] = [];
  filteredCredits: Credit[] = [];
  selectedCredit: Credit | null = null;
  creditLimit: number = 0;
  annualEffectiveRate: number = 0;
  moratoryInterestRate: number = 0;
  totalUsedCredit: number = 0;
  monthlyInstallment: number = 0;
  clientIdSearchTerm: string = '';

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getCredits();
    this.moratoryInterestRate = 12;
  }

  searchCreditsByClientId(): void {
    if (this.clientIdSearchTerm) {
      this.creditService.getCredits().subscribe((data: Credit[]) => {
        this.credits = data;
        this.filteredCredits = this.credits.filter(credit =>
          credit.clienteId.toLowerCase() === this.clientIdSearchTerm.toLowerCase()
        );
      });
    } else {
      this.filteredCredits = [];
    }
  }

  getCredits(): void {
    this.creditService.getCredits().subscribe((data: Credit[]) => {
      this.credits = data;
      this.filteredCredits = data;
    });
  }

  CreditDetails(credit: Credit): void {
    this.selectedCredit = credit;
    this.calculateCreditDetails();
    this.calculateMonthlyInstallment();
    this.applyMoratoryInterest();
  }

  calculateCreditDetails(): void {
    if (this.selectedCredit) {
      this.creditLimit = this.selectedCredit.confiabilidad * 100;
      this.annualEffectiveRate = this.calculateAnnualRate(this.selectedCredit.confiabilidad);
      this.calculateUsedCredit();
    }
  }

  calculateAnnualRate(confiabilidad: number): number {
    const tasaMinima = 8;
    const tasaMaxima = 10;
    return tasaMinima + ((tasaMaxima - tasaMinima) * ((5 - confiabilidad) / 4));
  }

  calculateInteresTotal(credit: Credit): number {
    const tasaInteresMensual = ((Math.pow((1 + (credit.tasaInteres / 100)), (credit.duracionMeses / 12))) - 1) * 100;
    const numeroPagos = credit.duracionMeses;
    const monto = credit.monto;

    const cuotaMensual = (monto * tasaInteresMensual/100) / (1 - Math.pow(1 + tasaInteresMensual/100, -numeroPagos));
    const totalPagado = cuotaMensual * numeroPagos;
    const InteresTotal = monto * tasaInteresMensual/100;
    return InteresTotal;
  }

  calculateUsedCredit(): void {
    if (this.selectedCredit) {
      const interesTotal = this.calculateInteresTotal(this.selectedCredit);
      this.totalUsedCredit = this.selectedCredit.monto + interesTotal;
    }
  }

  checkCreditLimit(): boolean {

    if (this.selectedCredit && this.totalUsedCredit > this.creditLimit) {
      return true;
    }
    return false;
  }

  calculateMonthlyInstallment(): void {
    if (this.selectedCredit) {
      const tasaInteresMensual = ((Math.pow((1 + (this.selectedCredit.tasaInteres / 100)), (1 / 12))) - 1);
      const numeroPagos = this.selectedCredit.duracionMeses;
      const monto = this.selectedCredit.monto;

      this.monthlyInstallment = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -numeroPagos));
    }
  }

  isPaymentLate(): boolean {
    const today = new Date();
    if (this.selectedCredit) {
      const fechaInicio = new Date(this.selectedCredit.fechaInicio);
      const mesesTranscurridos = Math.floor((today.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24 * 30));
      return mesesTranscurridos > this.selectedCredit.duracionMeses;
    }
    return false;
  }

  applyMoratoryInterest(): void {
    if (this.isPaymentLate()) {
      const moratoryInterest = this.totalUsedCredit * (this.moratoryInterestRate / 100);
      this.totalUsedCredit += moratoryInterest;
    }
  }



}
