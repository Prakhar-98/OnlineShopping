import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product:Product;
  constructor(private productService:ProductService,private router:Router,private aroute:ActivatedRoute) { 
    this.productService.getProduct(this.aroute.snapshot.params.id).subscribe((data)=>{
      this.product=data;
    })
  }

  ngOnInit(): void {
  }

  cancel()
  {
    this.router.navigate(['retailer/modifyList']);
  }

  deleteProduct()
  {
    this.productService.deleteProduct(this.product.productId).subscribe((data)=>
    {
      this.router.navigate(['retailer/modifyList']);
    });
  }

}
