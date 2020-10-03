import { Injectable } from "@angular/core";
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Retailer } from '../models/retailer';
@Injectable()
export class RetailerService{
    url:string;
    constructor(private httpCilent:HttpClient,private httpCilent1:HttpClient)
    {
        this.url='https://onwebapi.azurewebsites.net';
    }
    registerFromApi(user:User):Observable<boolean>
    {
        return this.httpCilent.post<boolean>(this.url+"/api/retailer",user);
    }
    deleteFromApi(id:number)
    {
        return this.httpCilent.delete(this.url+"/api/retailer/"+id);
    }

    getRevenue(id:number):Observable<Retailer>
    {
        return this.httpCilent1.get<Retailer>(this.url+"/api/retailer/"+id);
    }

    

}