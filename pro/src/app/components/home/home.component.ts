import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  courses:any;
  constructor(private auth:AuthService){}
  ngOnInit(): void {
    this.courses=this.auth.getAllData();
    console.log(this.courses);
  }
}
