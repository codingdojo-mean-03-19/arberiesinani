import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {

  constructor() { }
  @Output() myEvent = new EventEmitter;
  quote = {
    content:'',
    author:'',
    likes:0
  }
  callParent(){
    this.myEvent.emit(this.quote);
    this.quote ={
      content:'',
      author:'',
      likes:0
    }
  }
  ngOnInit() {
  }

}
