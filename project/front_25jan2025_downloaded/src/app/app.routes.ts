import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signup',component:RegisterComponent},
    {path:'dashboard',component:DashboardComponent,children:[
        {path:'',component:HomeComponent},
        {path:'products',component:ProductsComponent},
        {path:'changepassword',component:ChangepasswordComponent}
    ]}
];
