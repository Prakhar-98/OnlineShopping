import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private httpCilent:HttpClient,private httpCilent1:HttpClient,private httpCilent2:HttpClient,private httpCilent3:HttpClient,private httpCilent4:HttpClient)
    {

    }

    getAllProducts():Observable<Product[]>
    {
        return this.httpCilent.get<Product[]>("https://onwebapi.azurewebsites.net/api/products");
    }
    getProduct(id:number):Observable<Product>
    {
        return this.httpCilent2.get<Product>("https://onwebapi.azurewebsites.net/api/products/"+id);
    }
    updateProduct(product:Product)
    {
        console.log(product.productStatus);
        return this.httpCilent1.put("https://onwebapi.azurewebsites.net/api/products/"+product.productId,product);
    }


    addProduct(product:Product)
    {
        return this.httpCilent3.post("https://onwebapi.azurewebsites.net/api/products",product);
    }

    deleteProduct(id:number)
    {
        return this.httpCilent4.delete("https://onwebapi.azurewebsites.net/api/products/"+id);
    }

   
}