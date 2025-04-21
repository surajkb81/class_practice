import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errMsg:any='';
  myForm:FormGroup=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{1,100}')]),
    lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{1,100}')]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required])
  })
  constructor(private auth:AuthService,private router:Router){}
  get reg(){
    return this.myForm.controls;
  }
  formSubmit(){
    let formData=this.myForm.value;
    this.auth.userRegister(formData)
    .subscribe({
       next:(data:any)=>{
          if(data.err==0){
            alert(data.msg);
            this.router.navigateByUrl("/");
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
