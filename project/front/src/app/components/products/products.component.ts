import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  prodData:any;
  constructor(private prodService:ProductService){}
  ngOnInit(): void {
     this.prodService.getAllProducts()
     .subscribe({
      next:(data:any)=>{
        console.log(data);
         if(data.err==0){
           this.prodData=data.prodata;
         }
      },
      error:(err)=>{
        console.log(err)
      }
     })
  }
  delPro(id:any){
    if(confirm("Do u want to delete?")){
       this.prodService.deleteProduct(id)
       .subscribe({
        next:(data:any)=>{
           if(data.err==0){
            alert(data.msg);
            let data1=this.prodData.filter((pro:any)=> pro._id!=id);
            this.prodData=data1;
           }
        },
        error:(err)=>{
          console.log(err)
        }
       })
    }
  }
}
