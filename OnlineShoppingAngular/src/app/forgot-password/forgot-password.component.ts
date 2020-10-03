import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { OtpService } from '../services/OtpService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  otpSent:boolean;
  otp:number;
  userotp:number;
  user:User;
  message:string;
  cPassword:string;
  constructor(private otpService:OtpService,private userService:UserService,private router:Router) {
    this.otpSent=false;
    this.message="";
    this.user=new User();
   }

  ngOnInit(): void {
  }

  sendOtp()
  {
    this.otpService.getOtpfromApi(this.user.userEmail).subscribe((data)=>
    {
      this.otp=data;
      if(this.otp!=0)
      {
      this.otpSent=true;
      }
    else
     {
      this.message="Email does not exsist";
      }
    });
    
  }
  resendOtp()
  {
    this.otpService.resenttOtpfromApi(this.user.userEmail,this.otp).subscribe((data)=>
    {
      console.log(data);
    })
    console.log("Otp sended again")
  }
  changePassword(fp:NgForm)
  {
    if(fp.invalid)
    {
      this.message='Please enter all the details correctly';
    }
    else
    {
      if(this.user.userPassword!=this.cPassword)
      {
        this.message='Password Mismatch';
      }
      else if(this.otp==this.userotp)
      {
      this.userService.changePasswordFromApi(this.user).subscribe((data)=>{
        this.router.navigate(['login']);
      });
    }
      else
      {
        this.message="Invalid Otp";
      }
  }
}

}
