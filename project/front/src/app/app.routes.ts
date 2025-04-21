import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { authGuard } from './guards/auth.guard';
import { AddproductComponent } from './components/addproduct/addproduct.component';
export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signup',component:RegisterComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[authGuard],children:[
        {path:'',component:HomeComponent},
        {path:'products',component:ProductsComponent},
        {path:'addproduct',component:AddproductComponent},
        {path:'changepassword',component:ChangepasswordComponent}
    ]}
];
