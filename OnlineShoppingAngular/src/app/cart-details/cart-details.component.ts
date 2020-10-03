import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Cart } from '../models/cart';
import { CartModel } from '../models/cartModel';
import { Order } from '../models/order';
import { User } from '../models/user';
import { CartService } from '../services/CartService';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit,DoCheck {

  cartModels:CartModel[];
  address1:string;
  address2:string;
  city:string;
  state:string;
  zip:number;
  user:User;
  cartTotal:number=0;
  message:string;
  constructor(private cservice:CartService,private local:LocalStorageService,private pService:ProductService,private router:Router)
  {
    this.message='';
    this.user=this.local.retrieve('user');
    if(this.user!=null)this.cservice.getCartModelFromCart(this.user.userId).subscribe((data)=>
    {
      this.cartModels=data;
    });
  }
  ngOnInit(): void {
  }
ngDoCheck(): void {
  this.cartTotal=0;
  if(this.cartModels!=undefined)this.cartModels.forEach((v)=>
  {
    this.cartTotal+=v.cart.quantity*v.product.productPrice;
  });
}

increaseQuntity(cartModel:CartModel)
{
  cartModel.cart.quantity++;
}
decreseQuantity(cartModel:CartModel)
{
  cartModel.cart.quantity--;
  if(cartModel.cart.quantity==0)this.removeFromCart(cartModel);
}
placeOrder(addressForm:NgForm)
{
  if(addressForm.valid)
  {var address=this.address1+','+this.address2+','+this.city+','+this.state+','+this.zip;
  this.cservice.checkoutFromCart(this.cartModels,address).subscribe((d)=>
  {
    this.router.navigate(['checkout']);
  });}
  else
  {
    this.message='Please complete the address';
  }
}

removeFromCart(cartModel:CartModel)
{
  this.cservice.removeFromCart(cartModel.cart).subscribe((d)=>
    {
      this.cartModels.splice(this.cartModels.findIndex((c)=>c.cart.productId= cartModel.cart.productId),1);
    }
  )
}
}
