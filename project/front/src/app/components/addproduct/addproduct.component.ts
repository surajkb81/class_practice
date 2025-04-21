import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  imagePath:any='';
  errMsg:any='';
  myForm:FormGroup=new FormGroup({
    pname:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    features:new FormControl('',[Validators.required]),
    itemsQuantity:new FormControl('',[Validators.required])
  })
  constructor(private prodService:ProductService,private router:Router){}
  uploadImage(event:any){
     if(event.target.files.length>0){
        this.imagePath=event.target.files[0];
     }
  }
  formSubmit(){
    const formValues=this.myForm.value;
    if(this.imagePath!=''){
      if(this.imagePath.type==="image/jpeg" || this.imagePath.type==="image/png"){
         //if we want to send data to server with upload then we can use formdata 
         let formData=new FormData();
         formData.append("pname",formValues.pname),
         formData.append("category",formValues.category),
         formData.append("price",formValues.price),
         formData.append("features",formValues.features),
         formData.append("itemsQuantity",formValues.itemsQuantity),
         formData.append("att",this.imagePath);
         this.prodService.addProduct(formData)
         .subscribe({
          next:(data:any)=>{
             if(data.err==0){
                alert(data.msg);
                this.router.navigateByUrl("/dashboard/products")
             }
          },
          error:(err)=>{ console.log(err)}
         })

      }
      else{
        this.errMsg="Only Jpg and Png images allow";
      }
    }
    else{
      this.errMsg="Please select an image";
    }
  }
}
