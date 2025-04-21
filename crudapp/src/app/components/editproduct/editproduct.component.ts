import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent implements OnInit{
id:any;
prodData!:Product;
myForm:FormGroup=new FormGroup({
  name: new FormControl('',[Validators.required]),
  price: new FormControl('',[Validators.required]),
  quantity: new FormControl('',[Validators.required])
})
  constructor(private aroute:ActivatedRoute, private prodSer:ProductService,private router:Router){}
ngOnInit(): void {
  this.id=this.aroute.snapshot.paramMap.get('id');
  //console.log(this.id);
  this.prodSer.getById(this.id)
  .subscribe({
    next:(data)=>{
      //console.log(data);
      this.prodData=data;
      this.myForm.patchValue(this.prodData);
    },
    error:(err)=>{console.log(err);}
  })
}
submitForm(){
  let data=this.myForm.value;
  this.prodSer.updateProduct(this.id,data)
  .subscribe({
    next:(data)=>{
      alert("Product Updated");
      this.router.navigateByUrl("/products");
    }
  ,
  error:(err)=>{console.log(err);}
  })
}
}
