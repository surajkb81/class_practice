import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators,FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  imports: [ReactiveFormsModule],
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  myForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required])
  })
  constructor(private prodSer:ProductService,private router:Router){}
  submitForm(){
    let formData=this.myForm.value;
    //console.log(formData);
    
    this.prodSer.addProduct(formData)
    .subscribe({
      next:(data)=>{
        alert("Product Added");
        // re direct to ptoduct page
        this.router.navigateByUrl("/products");
      },
      error:(err)=> console.log(err)
    })
  }
  canExit():boolean{
    if(confirm("Do you want to leave it before save ?")){
      return true;
    }
    else{
      return false;
    }
  }

}
