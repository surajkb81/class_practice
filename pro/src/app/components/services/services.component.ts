import { Component } from '@angular/core';
import { ChildOutputComponent } from '../child-output/child-output.component';

@Component({
  selector: 'app-services',
  imports: [ChildOutputComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  counter:any=0;
  abc(data:any){
       this.counter=data;
    }
}
