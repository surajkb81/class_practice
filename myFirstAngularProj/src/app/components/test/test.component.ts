import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule,NgClass,NgStyle],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  name:String="Sumit Joshi";
  status:Boolean=true;
  courses:String[]=[];//=["A","B","C","d"];
  xyz(){
  this.status=!this.status;
  }
}