import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User;
  cpassword:string;
  message:string;
  constructor(private userService:UserService,private router:Router) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  registerUser(signUp:NgForm)
  {
    if(signUp.valid)
    {if(this.cpassword!=this.user.userPassword)
    {
      this.message='Passwords do not a match';
    }
    else this.userService.signUpFromApi(this.user).subscribe((data)=>
    {
      if(data)this.router.navigate(['/login']);
      else this.message="Email or phone already exsists.Please LogIn";
    });
  }
  else
  {
    this.message='Please enter all details correctly'
  }

  }

}
