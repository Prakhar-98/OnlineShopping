import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Product } from '../models/product';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-productstatus',
  templateUrl: './productstatus.component.html',
  styleUrls: ['./productstatus.component.css']
})
export class ProductstatusComponent implements OnInit {
  products:Product[];
  retId:number;
  message:string="";
  constructor(private productService:ProductService,private local:LocalStorageService) { 
    this.retId=this.local.retrieve('user').userId;
    productService.getAllProducts().subscribe(data=>{ //Get products of the particular retailer
      this.products=data.filter(s=>s.retailerId==this.retId);
    });
  }
 
  ngOnInit(): void {
  }

}
