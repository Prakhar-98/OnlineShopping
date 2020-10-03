import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/CartService';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit ,DoCheck{
  @Input()minPrice;
  @Input()maxPrice;
  @Input()sortType:number;
  productList: Product[] = []
  currentproductList: Product[] = []
  cartProductList:Cart[]=[]
  searchbar:string;
  user:User;
  constructor(private productService:ProductService,private aroute:ActivatedRoute,private cartService:CartService,private local:LocalStorageService) { 
    this.productService.getAllProducts().subscribe((data)=>
    {
      this.productList=data.filter(p=>p.productStatus=='available' && p.productStock>0);
      this.currentproductList=this.productList;
    });
    this.user=this.local.retrieve('user');
    if(this.user!=null)this.cartService.getProductsFromCart(this.user.userId).subscribe(p=>
      {
        this.cartProductList=p;
      });
    this.searchbar='';
  }

  ngOnInit(): void {

  }

  ngDoCheck()
  {
    
    this.currentproductList=this.productList.filter(p=>p.productName.toLowerCase().includes(this.searchbar.toLowerCase())||p.productDescription.toLowerCase().includes(this.searchbar.toLowerCase()));
    this.currentproductList=this.currentproductList.filter(p=>p.productPrice>=this.minPrice && p.productPrice<=this.maxPrice);
    this.aroute.params.subscribe(r=>
      {
        if(r.id!=undefined)this.currentproductList=this.currentproductList.filter(p=>p.categoryId==r.id);
      });
      if(this.sortType==1)this.currentproductList.sort((a,b)=>a.productPrice-b.productPrice);
      else if(this.sortType==2)this.currentproductList.sort((a,b)=>b.productPrice-a.productPrice);
      else if(this.sortType==3)this.currentproductList.sort((a,b)=>a.productName.localeCompare(b.productName));
      else if(this.sortType==4)this.currentproductList.sort((a,b)=>b.productName.localeCompare(a.productName));
  }
  checkInCart(product:Product):boolean
  {
    return this.cartProductList.some(c=>c.productId==product.productId);
  }
}
