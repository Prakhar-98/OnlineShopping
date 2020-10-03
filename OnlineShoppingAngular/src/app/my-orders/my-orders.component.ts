import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Order } from '../models/order';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders:Order[]=[];
  constructor(private local:LocalStorageService,private orderService:OrderServiceService,private router:Router) {
    this.orderService.getAllOrdesFromAPI(this.local.retrieve('user').userId).subscribe((data)=>
    {
      this.orders=data;
    });
   }

  ngOnInit(): void {
  }

  viewDetails(id:number)
  {
    this.router.navigate(['profile/orderDetails/'+id])
  }

}
