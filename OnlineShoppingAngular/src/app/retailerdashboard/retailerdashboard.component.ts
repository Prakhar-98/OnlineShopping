import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../models/user';

@Component({
  selector: 'app-retailerdashboard',
  templateUrl: './retailerdashboard.component.html',
  styleUrls: ['./retailerdashboard.component.css']
})
export class RetailerdashboardComponent implements OnInit {

  user:User;
  constructor(private local:LocalStorageService) {
    this.user=this.local.retrieve('user');
   }

  ngOnInit(): void {
  }

}
