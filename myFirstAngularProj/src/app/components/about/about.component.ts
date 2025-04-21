import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
amount:any=84884;
names:any="Suraj";
dob:any='1987-11-17';
data:any="hi this is dummy data";
}
