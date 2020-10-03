import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { User } from '../models/user';
import { CartService } from '../services/CartService';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  products:Product[]=[];
  cartList:Cart[];
  message:string="";
  user:User;
  constructor(private wishListService:WishListService,private router:Router,private local:LocalStorageService,private cartService:CartService) {
    this.user=this.local.retrieve('user');
    this.wishListService.getWishListProdutsFromApi(this.user.userId).subscribe(data=>{
      this.products=data;
    });
    this.cartService.getProductsFromCart(this.user.userId).subscribe(d=>
      {
        this.cartList=d;
      });
   }

  removeFromWishList(product:Product)
  {
    this.wishListService.deleteWishListProdutFromApi(product.productId,this.user.userId).subscribe(d=>{
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
    this.removeFromWishList(product);
  }
  checkInCart(product:Product):boolean
  {
    return this.cartList.some(c=>c.productId==product.productId);
  }

}
