import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
  @Input() inCart:boolean;
  user:User;
  constructor(private router:Router,private cService:CartService,private local:LocalStorageService ) {
    this.user=this.local.retrieve('user');
   }

  ngOnInit(): void {
  }

  viewDetails()
  {
    //console.log(this.productItem.productId);
    this.router.navigate(['ViewDetails',this.productItem.productId])
  }
  addToCart()
  {
    if(this.user!=null)this.cService.addCart(new Cart(this.productItem.productId,this.user.userId,1)).subscribe(c=>{
      this.inCart=true;
    });
   
  }
  removeFromCart()
  {
    if(this.user!=null)this.cService.removeFromCart(new Cart(this.productItem.productId,this.user.userId,1)).subscribe(c=>{
      this.inCart=false;
    });
  }

}
