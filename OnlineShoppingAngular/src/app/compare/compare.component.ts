import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CompareProductsService } from '../services/CompareProductsService';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { CartService } from '../services/CartService';
import { LocalStorageService } from 'ngx-webstorage';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  products:Product[];
  cartList:Cart[]=[];
  message:string="";
  user:User;
  constructor(private compareProductsService:CompareProductsService,private router:Router,private cartService:CartService,private local:LocalStorageService) {
    this.user=this.local.retrieve('user');
    compareProductsService.getCompareProducts().subscribe(data=>{
      this.products=data;
    });
    this.cartService.getProductsFromCart(this.user.userId).subscribe(c=>
      {
        this.cartList=c;
      })
   }

  removeFromCompare(product:Product)
  {
    this.compareProductsService.removeProductFromCompare(product.productId).subscribe(d=>{
      this.products.splice(this.products.indexOf(product),1);
    });
  }
   showDetails(id:number)
   {
    this.router.navigate(['ViewDetails/'+id]);
   }
  ngOnInit(): void {
  }
  addToCart(product:Product)
  {
    this.cartService.addCart(new Cart(product.productId,this.user.userId,1)).subscribe(c=>{
    });
    this.removeFromCompare(product);
  }
  checkInCart(product:Product):boolean
  {
    return this.cartList.some(c=>c.productId==product.productId);
  }

}
