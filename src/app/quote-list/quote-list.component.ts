import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Quote } from '../model/quote-class'

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes : Array<Quote> = [
    {
      id: 1,
      text: 'Walk as if you are kissing the Earth with your feet.',
      author: 'Thich Nhat Hanh'
    },
    {
      id: 2,
      text: 'Life is a journey. Time is a river. The door is ajar.',
      author: 'Jim Butcher'
    },
    {
      id: 3,
      text: 'Simplicity is the ultimate sophistication.',
      author: 'Leonardo da Vinci'
    }
  ];

  constructor( private router: Router ) { } // <-- Dependency Injection
  
  ngOnInit() {
  }

  removeQuote (id) {
    this.quotes = this.quotes.filter(
      (quote) => quote.id !== id
    );
  }

  goToHome() {
    this.router.navigate(['/home']); // <-- Programmatically navigate to home
  }
}
