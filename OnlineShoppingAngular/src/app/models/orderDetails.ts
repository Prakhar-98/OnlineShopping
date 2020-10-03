import { Order } from './order';
import { Product } from './product';

export class OrderDetails
{
    order:Order;
    product:Product;
    orderId:number;
    productId:number;
    quantity:number;
    price:number;
}