import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { CompareComponent } from 'src/app/compare/compare.component';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/CartService';
import { CompareProductsService } from 'src/app/services/CompareProductsService';
import { ProductService } from 'src/app/services/ProductService';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  product:Product;
  currentimg:string;
  currentindex:number;
  incomparision:boolean;
  inWishList:boolean;
  inSession:boolean;
  inCart:boolean;
  user:User;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private compare:CompareProductsService,private local:LocalStorageService,private wishList:WishListService,private cService:CartService) { 
    this.productService.getProduct(this.activatedRoute.snapshot.params.id).subscribe((data)=>{
      this.product=data;
      this.currentimg=data.productImg1;
      //this.currentindex
    });
    this.compare.getCompareProducts().subscribe((data)=>{
      if(data.some(p=>p.productId==this.activatedRoute.snapshot.params.id))this.incomparision=true;
    });
    if(this.local.retrieve('user')!=null)
    {
      this.inSession=true;
      this.user=this.local.retrieve('user');
    }
    else this.inSession=false;
    /*this.session.getUSer().subscribe((data)=>{
      if(data!=null && data!=undefined)this.inSession=true;
      else this.inSession=false;
    })*/
    if(this.user!=null || this.user!=undefined)
    {
      this.wishList.getWishListProdutsFromApi(this.user.userId).subscribe((data)=>{
      if(data.some(p=>p.productId==this.activatedRoute.snapshot.params.id))this.inWishList=true;
    });
    this.cService.getProductsFromCart(this.user.userId).subscribe(d=>
      {
        if(d.some(c=>c.productId==this.activatedRoute.snapshot.params.id))this.inCart=true;
      });
  }

  }

  ngOnInit(): void {
    
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName(
        'mySlides'
      ) as HTMLCollectionOf<HTMLElement>;
      var dots = document.getElementsByClassName('demo') as HTMLCollectionOf<
        HTMLElement
      >;
      // var captionText = document.getElementById("caption") ;
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
      //captionText.innerHTML = dots[slideIndex-1].alt;
    }
  }

  changeImg(n:number)
  {
    if(n==1)this.currentimg=this.product.productImg1;
    if(n==2)this.currentimg=this.product.productImg2;
    if(n==3)this.currentimg=this.product.productImg3;
    if(n==4)this.currentimg=this.product.productImg4;
  }
  addToCompare()
  {
    this.compare.addProductForCompare(this.product).subscribe((data)=>{
      this.incomparision=true;
    });
  }
  addToWishList()
  {
    this.wishList.addWishListProdutFromApi(this.product.productId,this.user.userId).subscribe((data)=>
    {
      this.inWishList=true;
    });
  }
  removeFromCompare()
  {
    this.compare.removeProductFromCompare(this.product.productId).subscribe((data)=>{
      this.incomparision=false;
    });
  }
  removeFromWishList()
  {
    this.wishList.deleteWishListProdutFromApi(this.product.productId,this.user.userId).subscribe((data)=>
    {
      this.inWishList=false;
    });
  }
  addToCart()
  {
    this.cService.addCart(new Cart(this.activatedRoute.snapshot.params.id,this.user.userId,1)).subscribe(a=>{
      this.inCart=true;
    });
  }
  removeFromCart()
  {
    this.cService.removeFromCart(new Cart(this.activatedRoute.snapshot.params.id,this.user.userId,1)).subscribe(a=>
      {
        this.inCart=true;
      });
  }
}
