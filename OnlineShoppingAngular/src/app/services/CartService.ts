import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { CartModel } from '../models/cartModel';

@Injectable()
export class CartService
{
    url:string;
    constructor(private httpClient:HttpClient,private httpClient1:HttpClient,private htttp3:HttpClient)
    {
        this.url='https://onwebapi.azurewebsites.net';
    }

    getProductsFromCart(id:number):Observable<Cart[]>
    {
        return this.htttp3.get<Cart[]>(this.url+"/api/carts/"+id);
    }
    
    removeFromCart(cart:Cart)
    {
        return this.httpClient.delete(this.url+'/api/carts?UserId='+cart.userId+'&ProductID='+cart.productId);
    }

    checkoutFromCart(cartModel:CartModel[],address:string) //remove from cart table and add in orders table
    {
        return this.httpClient.post(this.url+"/api/order",{address:address,cartModels:cartModel});
        
    }
    addCart(cart:Cart)
    {
        return this.httpClient.post(this.url+"/api/carts",cart);
    }
    getCartModelFromCart(id:number):Observable<CartModel[]>
    {
        return this.httpClient.get<CartModel[]>(this.url+'/api/cartmodel/'+id);
    }




}