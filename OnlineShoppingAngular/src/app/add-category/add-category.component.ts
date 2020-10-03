import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/CategoryService';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryName:string;
  constructor(private router:Router,private categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  register()
  {
    /*this.categoryService.addCategory(this.categoryName);
    this.router.navigate(['admin']);*/
    this.categoryService.addCategoryFromApi(this.categoryName).subscribe((data)=>
    {
      this.router.navigate(['admin']);
    });
  }

  cancel()
  {
    this.router.navigate(['admin']);
  }

}
