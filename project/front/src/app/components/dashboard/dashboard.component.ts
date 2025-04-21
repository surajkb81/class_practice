import { Component,OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent,RouterOutlet,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  constructor(private auth:AuthService){}
  ngOnInit(): void {
     let decode=this.auth.decodeToken();
     console.log(decode)
  }

}
