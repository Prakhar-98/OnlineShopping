import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  url:string;
  constructor(private http:HttpClient,private http1:HttpClient) {
    this.url='https://onwebapi.azurewebsites.net';
   }

  getWishListProdutsFromApi(id:number):Observable<Product[]>
  {
    return this.http.get<Product[]>(this.url+"/api/wishlist/"+id);
  }
  addWishListProdutFromApi(Productid:number,UserId:number)
  {
    return this.http.post(this.url+"/api/wishlist?ProductID="+Productid+"&UserId="+UserId,null);
  }
  deleteWishListProdutFromApi(Productid:number,UserId:number)
  {
    return this.http1.delete(this.url+"/api/wishlist?ProductID="+Productid+"&UserId="+UserId);
  }
}
