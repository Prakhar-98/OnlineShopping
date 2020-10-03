import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { OtpService } from './services/OtpService';
import { UserService } from './services/UserService';
import { ProductService } from './services/ProductService';
import { HttpClientModule } from '@angular/common/http';
import { VerifyProductComponent } from './verify-product/verify-product.component';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { RetailerService } from './services/RetailerService';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryService } from './services/CategoryService';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FilterComponent } from './shopping-cart/filter/filter.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { ProductDescriptionComponent } from './shopping-cart/product-list/product-item/product-description/product-description.component';
import { CompareComponent } from './compare/compare.component';
import { CompareProductsService } from './services/CompareProductsService';
import { RetailerdashboardComponent } from './retailerdashboard/retailerdashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { RevenueComponent } from './revenue/revenue.component';
import { DeactivateaccountComponent } from './deactivateaccount/deactivateaccount.component';
import { ProductstatusComponent } from './productstatus/productstatus.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ModifyListComponent } from './modify-list/modify-list.component';
import { UserAuthGuardService } from './services/user-auth-guard.service';
import { RetailerAuthGuardService } from './services/retailer-auth-guard.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from './services/CartService';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
const routes:Routes=[
  {path:'',component:ShoppingCartComponent},
  {path:'list',component:ShoppingCartComponent},
  {path:'ViewDetails/:id', component:ProductDescriptionComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'admin',component:AdminDashBoardComponent,canActivate:[AdminAuthGuardService]},
  {path:'addRetailer',component:AddRetailerComponent,canActivate:[AdminAuthGuardService]},
  {path:'addCategory',component:AddCategoryComponent,canActivate:[AdminAuthGuardService]},
  {path:'verify/:id',component:VerifyProductComponent,canActivate:[AdminAuthGuardService]},
  {path:'wishList',component:WishListComponent,canActivate:[UserAuthGuardService]},
  {path:'profile',component:ProfileComponent,children:[
  {path:'personaldetails',component:PersonaldetailsComponent},
  {path:'',component:PersonaldetailsComponent}, 
  {path:'deactivateaccount',component:DeactivateaccountComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'orders',component:MyOrdersComponent},
  {path:'orderDetails/:id',component:OrderDetailsComponent}
],canActivate:[UserAuthGuardService]},
  {path:'retailer',component:RetailerdashboardComponent,children:[
  {path:'addproduct',component:AddProductComponent},
  {path:'modifyList',component:ModifyListComponent},
  {path:'modifyproduct/:id',component:ModifyProductComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'deleteproduct/:id',component:DeleteProductComponent},
  {path:'personaldetails',component:PersonaldetailsComponent},
  {path:'deactivateaccount',component:DeactivateaccountComponent},
  {path:'revenue',component:RevenueComponent},
  {path:'productstatus',component:ProductstatusComponent},
  {path:'',component:PersonaldetailsComponent},
],canActivate:[RetailerAuthGuardService]},
  {path:'compare',component:CompareComponent,canActivate:[UserAuthGuardService]},
  {path:'cart',component:CartDetailsComponent,canActivate:[UserAuthGuardService]},
  {path:'checkout',component:CheckoutComponent,canActivate:[UserAuthGuardService]},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PersonaldetailsComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    AdminDashBoardComponent,
    VerifyProductComponent,
    AddRetailerComponent,
    AddCategoryComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FilterComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDescriptionComponent,
    CompareComponent,
    RetailerdashboardComponent,
    AddProductComponent,
    ModifyProductComponent,
    DeleteProductComponent,
    RevenueComponent,
    DeactivateaccountComponent,
    ProductstatusComponent,
    WishListComponent,
    ChangePasswordComponent,
    ModifyListComponent,
    MyOrdersComponent,
    CheckoutComponent,
    CartDetailsComponent,
    OrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,NgxWebstorageModule.forRoot()
  ],
  providers: [OtpService,UserService,ProductService,RetailerService,CategoryService,CompareProductsService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
