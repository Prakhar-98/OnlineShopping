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

  sendOtp()//Returns 0 if email not registered and OTP if registered
  {
    this.otpService.getOtpfromApi(this.user.userEmail).subscribe((data)=>
    {
      this.otp=data;
      if(this.otp!=0)
      {
      this.otpSent=true;//OTP is sent successfully on registered email id
      }
    else
     {
      this.message="Email not registered";
      }
    });
    
  }
  resendOtp()
  {
    this.otpService.resenttOtpfromApi(this.user.userEmail,this.otp).subscribe();
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
        this.message="Passwords don't match";
      }
      else if(this.otp==this.userotp) //Check if OTP sent is same as OTP entered by user
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
