import { Injectable,inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL="http://localhost:8899/api/v1/products";
 
  http=inject(HttpClient);
  auth=inject(AuthService);
  headers=new HttpHeaders({
    Authorization:`Bearer ${this.auth.getToken()}`
   });
  getAllProducts(){
    return this.http.get(`${this.API_URL}/getallproducts`,{headers:this.headers});
  }
  getProductById(id:any){
    return this.http.get(`${this.API_URL}/byid/${id}`);
  }
  addProduct(data:any){
    return this.http.post(`${this.API_URL}/add`,data)
  }
 deleteProduct(id:any){
    return this.http.delete(`${this.API_URL}/delete/${id}`);
  }
  updateProduct(id:any,data:any){
    return this.http.put(`${this.API_URL}/edit/${id}`,data);
  }
}
