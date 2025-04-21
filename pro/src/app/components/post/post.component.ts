import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  http=inject(HttpClient);
   postData:any;
  //  constructor(private http:HttpClient){}
  ngOnInit(): void {
    const API="https://jsonplaceholder.typicode.com/posts";
    this.http.get(API)
    .subscribe({
      next:(data)=>{
          this.postData=data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
