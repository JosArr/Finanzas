import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import {UserService} from "../../services/UserService/user.service";
import {Credit} from "../../models/models/credit";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'telefono'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().pipe(
      tap(data => this.clients = data),
      catchError(error => {
        console.error('Error fetching client list', error);
        return of([]);
      })
    ).subscribe();
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
