import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  DailyQuote:any;
  constructor() { }

  ngOnInit(): void {
    this.getDailyQuote();
    //console.log(this.DailyQuote);
  }

  getDailyQuote() {
    fetch('https://type.fit/api/quotes')
    .then(response=>response.json())
    .then(data=>{this.setQuoteArray(data);})
  }

  setQuoteArray(data) {
    let rand = Math.floor(Math.random() * data.length);
    this.DailyQuote = data[rand];
    console.log(rand);
    console.log(data.length);
    console.log(this.DailyQuote);
  }

}
