import { Component,OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  userTokenData:any;
  constructor(private auth:AuthService,private router:Router){}
    ngOnInit(): void {
       let decode=this.auth.decodeToken();
       this.userTokenData=decode;
    }
    signOut(){
      if(confirm("Do u want to logout?")){
         localStorage.removeItem("_token");
         this.router.navigateByUrl("/");

      }
    }
}
