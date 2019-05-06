import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  @Input() myQuotes;
  @Output() updateEvent = new EventEmitter;
  constructor() { }
  voteUP(quote){
    quote['likes'] ++;
    this.updateEvent.emit(this.myQuotes)
  }
  voteDOWN(quote){
    quote['likes'] --;
    this.updateEvent.emit(this.myQuotes)
  }
  del(quote){
    for(var i = 0; i < this.myQuotes.length; i++){
      if(this.myQuotes[i] == quote){
        this.myQuotes.splice(i,1);
        this.updateEvent.emit(this.myQuotes)
      }
    }
  }
  ngOnInit() {
  }

}
