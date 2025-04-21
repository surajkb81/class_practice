import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,NgTemplateOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
titleHome:string="Hello welcome to Home";
isActive:boolean=true;
imagePath:string="https://picsum.photos/200/300";
name:String="Sumit Joshi";
courses:String[]=["A","B","C","d"];

xyz(){
  //alert("Hello");
  this.isActive=!this.isActive;
}

}
