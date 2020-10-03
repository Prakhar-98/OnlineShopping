import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Product } from '../models/product';
import { User } from '../models/user';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-modify-list',
  templateUrl: './modify-list.component.html',
  styleUrls: ['./modify-list.component.css']
})
export class ModifyListComponent implements OnInit {

  user:User;
  products:Product[]=[];
  constructor(private local:LocalStorageService,private product:ProductService,private router:Router) { 
    this.user=this.local.retrieve('user');
    this.product.getAllProducts().subscribe((data)=>
    {
      this.products=data.filter(p=>p.retailerId==this.user.userId && p.productStatus!='modified');
    });
  }

  ngOnInit(): void {
  }
  modify(id:number)
  {
    this.router.navigate(['retailer/modifyproduct/'+id]);
  }
  delete(id:number)
  {
    this.router.navigate(['retailer/deleteproduct/'+id]);
  }


}
