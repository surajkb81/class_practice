import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product';
import { RouterLink } from '@angular/router';
import { LimittoPipe } from '../../pipes/limitto.pipe';

@Component({
  selector: 'app-products',
  imports: [RouterLink,LimittoPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  productData:Product[]=[];
constructor(private prodSer:ProductService){}
ngOnInit(): void {
  this.prodSer.getAll()
  .subscribe({
    next:(data)=>{console.log(data);
      this.productData=data;
    },
    error:(err)=>{console.log(err)}
  })
}
delPro(id:number){
  if(confirm("Do you want to Delete ? ")){
    this.prodSer.deleteProduct(id)
    .subscribe({
      next:(data)=>{
          alert("Product Deleted");
          let pdata=this.productData.filter(prod=> prod.id!=id);
          this.productData=pdata;
      },
      error:(err)=> console.log(err)
    })
  }
}
addCart(prod:any){
  if(localStorage.getItem('mycart')!=undefined){
    let data:any=localStorage.getItem('mycart');
    let arr=JSON.parse(data);
    let status=0
    arr.forEach((element:any,ind:any) => {
        if(element.id==prod.id){
           status=1;
           arr[ind].items+=1;
        }
    });
    if(status==1){
       localStorage.setItem('mycart',JSON.stringify(arr));
       this.prodSer.addCartSubject(arr);
       alert("Add Cart Successfully");
       //window.location.reload();
    }
    else{
       let addData={...prod,items:1};
       arr.push(addData)
       localStorage.setItem('mycart',JSON.stringify(arr));
       this.prodSer.addCartSubject(arr);
       alert("Add Cart Successfully");
     //  window.location.reload();
    }
  }
  else{
     let arr=[];
     let addData={...prod,items:1};
     arr.push(addData)
     localStorage.setItem('mycart',JSON.stringify(arr));
     this.prodSer.addCartSubject(arr);
     alert("Add Cart Successfully");
  }
  
}

}

