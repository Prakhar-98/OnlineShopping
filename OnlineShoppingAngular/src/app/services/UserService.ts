import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  url:string;
  constructor(private httpCilent:HttpClient,private httpCilent1:HttpClient,private httpCilent2:HttpClient)
    {
      this.url='https://onwebapi.azurewebsites.net';
    }
  changePasswordFromApi(user:User)
  {
    return this.httpCilent.get(this.url+"/api/login?email="+user.userEmail+"&password="+user.userPassword);
  }
  loginFromApi(user:User):Observable<User>
  {
    return this.httpCilent.put<User>(this.url+"/api/login",user);
  }
  signUpFromApi(user:User):Observable<boolean>
  {
    return this.httpCilent.post<boolean>(this.url+"/api/login",user);
  }

  deactivateAccount(user:User)
  {
    return this.httpCilent.request("delete",this.url+"/api/users",{body:user});
  }
  updateFromApi(user:User):Observable<boolean>
  {
    return this.httpCilent2.put<boolean>(this.url+"/api/users/"+user.userId,user);
  }
}