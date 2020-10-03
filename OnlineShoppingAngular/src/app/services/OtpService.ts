import { HttpClient } from '@angular/common/http';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class OtpService {

  url:string;
  constructor(private httpClient:HttpClient)
  {
    this.url='https://onwebapi.azurewebsites.net';
  }
  resendOtp(otp:number)
  {
    return this.httpClient.get("");
  }

  getOtp(): number {
    return 1;
  }
  getOtpfromApi(email:string):Observable<number>
  {
    return this.httpClient.get<number>(this.url+"/api/otp?email="+email);
  }
  resenttOtpfromApi(email:string,otp:number)
  {
    return this.httpClient.get(this.url+"/api/otp?email="+email+"&otp="+otp);
  }
}