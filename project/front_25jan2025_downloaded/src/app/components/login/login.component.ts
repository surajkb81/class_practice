import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm:FormGroup=new FormGroup({
     email:new FormControl('',[Validators.required]),
     password:new FormControl('',[Validators.required]),
  });
  get log(){
    return this.myForm.controls;
  }
  formSubmit(){
    let formData=this.myForm.value;
    console.log(formData)
  }
}
