import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/UserService';
import { LocalStorageService } from 'ngx-webstorage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  user:User;
  message:string;
  constructor(private userService:UserService,private router:Router,private localStorage:LocalStorageService) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  login(loginForm:NgForm)
  {
    if(loginForm.valid)this.userService.loginFromApi(this.user).subscribe((data)=> //Returns user object if login successful else null
    {
      if(data!=null) {
        this.localStorage.store('user',data);//Store user object in localstorage for the session
        this.router.navigate(['']);
      }
      else this.message="Incorrect username or password";
    });
    else this.message='Please Enter all the details correctly'
  }

}
