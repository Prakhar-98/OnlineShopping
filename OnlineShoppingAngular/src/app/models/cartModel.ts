import { ProductService } from '../services/ProductService';
import { Cart } from './cart';
import { Product } from './product';

export class CartModel
{
    product:Product;
    cart:Cart;
    constructor(private pService:ProductService,cartM:Cart)
    {
        this.product=null;
        this.cart=cartM;
        this.pService.getProduct(cartM.productId).subscribe((data)=>
        {
            this.product=data;
        });
    }
}