import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../models/user';
import { CompareProductsService } from '../services/CompareProductsService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  constructor(private compare:CompareProductsService,private localStorage:LocalStorageService) { 
    this.user=this.localStorage.retrieve('user');
  }

  ngOnInit(): void {
  }

  signOut()
  {
    this.localStorage.clear('user');
    this.compare.removeAll().subscribe((data)=>
    {
      
    });

  }
}
