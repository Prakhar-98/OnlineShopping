import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../models/orderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  url:string;
  constructor(private http:HttpClient) {
    this.url='https://onwebapi.azurewebsites.net';
   }

  getOrderDetailsFromApi(id:number):Observable<OrderDetails[]>
  {
    return this.http.get<OrderDetails[]>(this.url+"/api/orderdetails/"+id);
  }
}
