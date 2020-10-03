import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { CategoryService } from '../services/CategoryService';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  product:Product;categories:Category[]=[];
  message:string;
  constructor(private productService:ProductService,private aroute:ActivatedRoute,private route:Router,private cService:CategoryService) { 
    this.productService.getProduct(this.aroute.snapshot.params.id).subscribe((data)=>
    {
      this.product=data;
    });
    cService.getCategories().subscribe((data)=>
    {
      this.categories=data;
    });
    this.message='';
  }

  ngOnInit(): void {
  }

  modifyProduct(mod:NgForm)
  {
    if(mod.valid)
    {
      this.product.productStatus='modified';
      this.productService.updateProduct(this.product).subscribe((data)=>{
      this.route.navigate(['retailer/modifyList']);
    });
  }
    else this.message='Please enter all required fields';
  }

}
