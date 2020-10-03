import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Retailer } from '../models/retailer';
import { RetailerService } from '../services/RetailerService';
import { Observable } from 'rxjs';
import { ProductService } from '../services/ProductService';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {
  products:Product[];
  retailer:Retailer;
  retId:number;//Retailer id from session
  constructor(private retailerService:RetailerService,private localService:LocalStorageService) { 
    this.retailerService.getRevenue(this.localService.retrieve('user').userId).subscribe(data=>{
      this.retailer=data;
    });
  }

  ngOnInit(): void {
  }

  getRevenue()  //get retailer id from session
  {
    
  }

}
