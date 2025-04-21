import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL="http://localhost:8899/api/v1/auth";
  http=inject(HttpClient);
  userLogin(data:any){
     return this.http.post(`${this.API_URL}/signin`,data)
  }
  userRegister(data:any){
    return this.http.post(`${this.API_URL}/signup`,data)
 }
   getToken(){
      return localStorage.getItem("_token");
   }
   decodeToken(){
       let token:any=this.getToken()
       return this.getToken()!=undefined ? jwtDecode(token):null;
   }
}
