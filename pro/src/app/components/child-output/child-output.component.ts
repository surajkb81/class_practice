import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-output',
  imports: [],
  templateUrl: './child-output.component.html',
  styleUrl: './child-output.component.css'
})
export class ChildOutputComponent {
  @Output() myevent=new EventEmitter();
  count:any=0;
xyz(){
  this.count++;
  this.myevent.emit(this.count);
}
}
