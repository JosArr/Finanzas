import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'https://my-json-server.typicode.com/XLianLZ/dbFinazas/products';
  constructor() { }
}
