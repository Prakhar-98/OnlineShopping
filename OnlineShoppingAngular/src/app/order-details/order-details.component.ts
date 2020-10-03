import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from '../models/orderDetails';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails:OrderDetails[]=[];
  constructor(private orderDetailsService:OrderDetailsService,private aroute:ActivatedRoute) { 
    var orderId=this.aroute.snapshot.params.id;
    this.orderDetailsService.getOrderDetailsFromApi(orderId).subscribe(o=>
      {
        this.orderDetails=o;
      })
  }

  ngOnInit(): void {
  }

}
