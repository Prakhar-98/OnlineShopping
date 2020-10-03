import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }

  getAllOrdesFromAPI(id:number):Observable<Order[]>
  {
    return this.http.get<Order[]>("https://onwebapi.azurewebsites.net/api/order/"+id);
  }
}
