import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  myForm:any=new FormGroup({
    fullName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]{2,100}')]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required])
  })
  formSubmit(){
     let formData=this.myForm.value;
     console.log(formData)
  }
  get myinputs(){
    return this.myForm.controls;
  }
}


