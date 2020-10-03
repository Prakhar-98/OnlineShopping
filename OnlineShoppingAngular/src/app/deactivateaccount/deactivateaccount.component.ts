import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../models/user';
import { CompareProductsService } from '../services/CompareProductsService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-deactivateaccount',
  templateUrl: './deactivateaccount.component.html',
  styleUrls: ['./deactivateaccount.component.css']
})
export class DeactivateaccountComponent implements OnInit {
  user:User;
  password:string;
  message:string;
  //set userid using session
  constructor(private userService:UserService,private local:LocalStorageService,private router:Router,private cmp:CompareProductsService) {
    this.user=this.local.retrieve('user');
    this.message='';
   }

  ngOnInit(): void {
  }

  deactivateAccount()
  {
    if(this.password==this.user.userPassword)
    {
      this.userService.deactivateAccount(this.user).subscribe();
      this.local.clear('user');
      this.router.navigate(['/']);
      this.cmp.removeAll().subscribe();
    }
    else
    {
      this.message='Wrong Password'
    }
  }
}
