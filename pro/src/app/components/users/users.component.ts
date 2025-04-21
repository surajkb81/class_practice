import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  http=inject(HttpClient);
  userData:any;
  ngOnInit(): void {
    const URL="https://jsonplaceholder.typicode.com/users";
    this.http.get(URL)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.userData=data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
