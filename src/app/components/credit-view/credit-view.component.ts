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
  selectedCredit: Credit | null = null;
  creditLimit: number = 0;
  annualEffectiveRate: number = 0;

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getCredits();
  }

  getCredits(): void {
    this.creditService.getCredits().subscribe((data: Credit[]) => {
      this.credits = data;
    });
  }

  CreditDetails(credit: Credit): void {
    this.selectedCredit = credit;
    this.calculateCreditDetails();
  }

  calculateCreditDetails(): void {
    if (this.selectedCredit) {
      this.creditLimit = this.selectedCredit.confiabilidad * 100;
      this.annualEffectiveRate = this.calculateAnnualRate(this.selectedCredit.confiabilidad);
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
}
