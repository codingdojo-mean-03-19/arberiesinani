import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes = [];
  invoke(event){
    this.quotes.push(event);
    this.quotes.sort(function(a,b){
      return b['likes']-a['likes']
    })
  }
  update(event){
    this.quotes = event;
    this.quotes.sort(function(a,b){
      return b['likes']-a['likes']
    })
  }
}
