import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
@Injectable()
export class CategoryService{
    url:string;
    constructor(private httpCilent:HttpClient)
    {
        this.url='https://onwebapi.azurewebsites.net';
    }

    getCategories():Observable<Category[]>
    {
        return this.httpCilent.get<Category[]>(this.url+"/api/category");
    }
    
    addCategoryFromApi(categoryName:string):Observable<boolean>
    {
        return this.httpCilent.post<boolean>(this.url+"/api/category?category="+categoryName,null);
    }
}