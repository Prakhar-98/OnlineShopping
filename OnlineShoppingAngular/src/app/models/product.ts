export class Product
{
    productId:number;
    productName:string;
    productDescription:string;
    productPrice:number;
    productStock:number;
    productImg1:string;
    productImg2:string;
    productImg3:string;
    productImg4:string;
    productBrand:string;
    categoryId:number;
    retailerId:number;
    productStatus:string;
    productRemark:string;
    
    constructor(productName?,unitPrice?,image1?){
        this.productName=productName;
        this.productPrice=unitPrice;
        this.productImg1=image1;
    }
}