import { Injectable,inject } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http=inject(HttpClient);
  subject$=new Subject();
  //mock API URL
  private URL = "http://localhost:3000/products";
   constructor() {
    if(typeof window !=='undefined' && 'localStorage' in window){
      let localdata=window.localStorage.getItem('mycart');
      this.subject$=new BehaviorSubject(localdata!=undefined?JSON.parse(localdata):[]);
   }
    }
  //add card data in the subject
  addCartSubject(data:any){
    this.subject$.next(data);
  }
// get all products
getAll():Observable<Product[]>{
  return this.http.get<Product[]>(this.URL);
}
// Add products
addProduct(product:Product):Observable<Product>{
  return this.http.post<Product>(this.URL,product);
}
// update product
updateProduct(id:any,product:Product):Observable<Product>{
  return this.http.put<Product>(`${this.URL}/${id}`,product);
}
//delete product
deleteProduct(id:any):Observable<void>{
  return this.http.delete<void>(`${this.URL}/${id}`);
}
//get product by id
getById(id:any):Observable<Product>{
  return this.http.get<Product>(`${this.URL}/${id}`);
}
isLoggedIn(){
  return true;
}
}

