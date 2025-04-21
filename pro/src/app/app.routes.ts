import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DelhiComponent } from './components/contact/delhi/delhi.component';
import { MumbaiComponent } from './components/contact/mumbai/mumbai.component';
import { PunjabComponent } from './components/contact/punjab/punjab.component';
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'service',component:ServicesComponent},
    {path:'product',component:ProductComponent},
    {path:'post',component:PostComponent},
    {path:'users',component:UsersComponent},
    {path:'templateform',component:TemplateformComponent},
    {path:'reactiveform',component:ReactiveformComponent},
    {path:'contact',component:ContactComponent,children:[
        {path:'delhi',component:DelhiComponent},
        {path:'mumbai',component:MumbaiComponent},
        {path:'punjab',component:PunjabComponent},
        {path:'',redirectTo:'delhi',pathMatch:'full'}
    ]},
    {path:'**',component:NotfoundComponent}
];
