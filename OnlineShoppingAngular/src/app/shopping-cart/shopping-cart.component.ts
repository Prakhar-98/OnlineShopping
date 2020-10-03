import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  minPrice:number;
  maxPrice:number;
  sortType:number;
  constructor() { 
    this.minPrice=0;
    this.maxPrice=1000000;
    this.sortType=0;
  }

  ngOnInit(): void {
  }
  filterPrice(price)
  {
    if(price.min!=null)this.minPrice=price.min;else this.minPrice=0;
    if(price.max!=null)this.maxPrice=price.max;else this.maxPrice=1000000;

  }
  sort(type:number)
  {
    if(type!=undefined&& type!=null)this.sortType=type;else this.sortType=0;
  }

}
