import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Category } from 'src/app/models/category';
import { User } from 'src/app/models/user';
import { CategoryService } from 'src/app/services/CategoryService';
import { CompareProductsService } from 'src/app/services/CompareProductsService';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,DoCheck {

  user:User;
  categoreies:Category[];
  constructor(private router:Router,private compare:CompareProductsService,private localStorage:LocalStorageService,private cService:CategoryService) {
    this.user=null;
    this.cService.getCategories().subscribe((data)=>
    {
      this.categoreies=data;
    });
   }

  ngOnInit(): void {
  }
  ngDoCheck()
  {
    this.user=this.localStorage.retrieve('user');
  }
  signOut()
  {
    this.localStorage.clear('user');
    this.compare.removeAll().subscribe((data)=>
    {
      
    });

  }
  cateogoryView(id:number)
  {
    this.router.navigate(['/list',{id:id}])
  }

}
