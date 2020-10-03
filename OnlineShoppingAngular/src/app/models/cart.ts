import { Product } from './product';

export class Cart
{
    productId:number;
    userId:number;
    quantity:number;
    constructor(pid,uid,q)
    {
        this.productId=pid;
        this.userId=uid;
        this.quantity=q;
    }
}