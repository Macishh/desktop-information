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
    .then(data=>{this.setDailyQuote(data);})

    //this.setDailyQuote('{     "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",     "author": "Thomas Edison"   },   {     "text": "You can observe a lot just by watching.",     "author": "Yogi Berra"   },   {     "text": "A house divided against itself cannot stand.",     "author": "Abraham Lincoln"   },   {     "text": "Difficulties increase the nearer we get to the goal.",     "author": "Johann Wolfgang von Goethe"  }')
  }

  setDailyQuote(data) {
    console.log(data)
    this.DailyQuote = data;
    console.log(this.DailyQuote)
  }

}
