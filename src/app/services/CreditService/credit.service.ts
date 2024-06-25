import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Credit} from "../../models/models/credit";

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private apiURL = 'https://my-json-server.typicode.com/XLianLZ/dbFinazas/creditos';
  private userURL = 'https://my-json-server.typicode.com/XLianLZ/dbFinazas/usuarios';

  constructor(private http: HttpClient) { }

  getCredits(): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.apiURL);
  }

  getCreditById(id: string): Observable<Credit> {
    return this.http.get<Credit>(`${this.apiURL}/${id}`);
  }

  addCredit(credit: Credit): Observable<Credit> {
    return this.http.post<Credit>(this.apiURL, credit);
  }

  updateCredit(credit: Credit): Observable<Credit> {
    return this.http.put<Credit>(`${this.apiURL}/${credit.id}`, credit);
  }

  getUserById(id: string | undefined): Observable<any> {
    return this.http.get<any>(`${this.userURL}/${id}`);
  }

}
