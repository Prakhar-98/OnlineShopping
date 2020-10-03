import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class CompareProductsService
{
    url:string;
    constructor(private httpCilent:HttpClient,private httpCilent1:HttpClient,private httpCilent2:HttpClient)
    {
        this.url='https://onwebapi.azurewebsites.net';
    }

    getCompareProducts():Observable<Product[]>
    {
        return this.httpCilent.get<Product[]>(this.url+"/api/compareproducts");
    }

    addProductForCompare(product:Product)
    {
        return this.httpCilent1.post(this.url+"/api/compareproducts/"+product.productId,null);
    }

    removeProductFromCompare(id:number)
    {
        return this.httpCilent2.delete(this.url+"/api/compareproducts/"+id);
    }

    removeAll()
    {
        return this.httpCilent2.delete(this.url+"/api/compareproducts/");
    }
    
}