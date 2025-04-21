import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myForm:FormGroup=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{1,100}')]),
    lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{1,100}')]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required])
  })
  get reg(){
    return this.myForm.controls;
  }
  formSubmit(){
    let formData=this.myForm.value;
    console.log(formData);
  }
}
