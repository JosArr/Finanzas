import { Component, OnInit } from '@angular/core';
import { Credit } from '../../models/models/credit';
import { CreditService } from '../../services/CreditService/credit.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  credits: Credit[] = [];
  newCredit: Partial<Credit> = {};

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getCredits();
  }

  getCredits(): void {
    this.creditService.getCredits().subscribe((data: Credit[]) => {
      this.credits = data;
    });
  }

  calcularInteres(confiabilidad: number): number {
    const tasaMinima = 8;
    const tasaMaxima = 10;
    return tasaMinima + ((tasaMaxima - tasaMinima) * ((5 - confiabilidad) / 4));
  }

  calcularLimiteCredito(confiabilidad: number): number {
    return confiabilidad * 100;
  }

  addCredit(): void {
    const clienteId = this.newCredit.clienteId as string;
    const monto = parseFloat(this.newCredit.monto as any);
    const duracionMeses = parseInt(this.newCredit.duracionMeses as any);

    this.creditService.getUserById(clienteId).subscribe(usuario => {
      const confiabilidad = usuario.confiabilidad;
      const tasaInteres = this.calcularInteres(confiabilidad);
      const limiteCredito = this.calcularLimiteCredito(confiabilidad);

      if (monto > limiteCredito) {
        alert('El monto solicitado excede el límite de crédito permitido.');
        return;
      }

      const nuevoCredito: Credit = {
        id: '',
        clienteId: clienteId,
        monto: monto,
        tasaInteres: tasaInteres,
        fechaInicio: new Date(),
        duracionMeses: duracionMeses,
        confiabilidad: confiabilidad
      };

      this.creditService.addCredit(nuevoCredito).subscribe(credito => {
        this.credits.push(credito);
        alert('Crédito añadido exitosamente.');
      });
    });
  }

  calcularInteresTotal(credit: Credit): number {
    const tasaInteresMensual = credit.tasaInteres / 100 / 12;
    const numeroPagos = credit.duracionMeses;
    const monto = credit.monto;

    const cuotaMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -numeroPagos));
    const totalPagado = cuotaMensual * numeroPagos;
    const interesTotal = totalPagado - monto;

    return interesTotal;
  }


}
