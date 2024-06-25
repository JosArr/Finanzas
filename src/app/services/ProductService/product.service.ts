import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://my-json-server.typicode.com/XLianLZ/dbFinazas/products';
  constructor() { }
}
