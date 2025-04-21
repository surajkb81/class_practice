import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
  constructor(private auth:AuthService, private router:Router){}
  errMsg:any='';
  get log(){
    return this.myForm.controls;
  }
  formSubmit(){
    let formData=this.myForm.value;
    this.auth.userLogin(formData)
    .subscribe({
      next:(data:any)=>{
        if(data.err==0){
           //store token in the localstorage 
           localStorage.setItem("_token",data.token);
           this.router.navigateByUrl("/dashboard");
        }
        if(data.err==1){
          this.errMsg=data.msg;
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
