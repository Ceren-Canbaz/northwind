import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { LoginTestGuard } from './guards/login-test.guard';
import { SignupControlGuard } from './guards/signup-control.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ProductDetailsAdminComponent } from './components/product-details-admin/product-details-admin.component';
import { RegisterComponent } from './components/register/register.component';
import { NaviComponent } from './components/navi/navi.component';
import { SaveOrderComponent } from './components/save-order/save-order.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  // {path:"",pathMatch:"full", component:LoginComponent,canActivate:[SignupControlGuard]},
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent,canActivate:[LoginTestGuard]},
  {path:"products/productDetails/:productId",component:ProductDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"products/Admin", component:AdminComponent},
  {path:"products/productDetailsAdmin/:productId", component:ProductDetailsAdminComponent},
  {path:"register", component:RegisterComponent},
  {path:"navi",component:NaviComponent},
  {path:"order", component:SaveOrderComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
