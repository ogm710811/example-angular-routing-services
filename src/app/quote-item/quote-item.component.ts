import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Quote } from '../model/quote-class';
@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  // This decorator let’s us define an input property called quote, 
  // meaning that the parent component will have to pass data into QuoteItemComponent 
  // to set the value of quote.
  @Input() quote : Quote;
  @Output() onDelete : EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  // This is a special kind of method that the framework calls 
  // for us in a specific moment in the component lifecycle.
  // ngOnInit is one of many lifecycle hooks that gives us a way 
  // to be notified about the components state and current lifecycle.
  ngOnInit() {
  }

  onQuoteDelete () {
    this.onDelete.emit(this.quote.id);
  }

  viewDetails(id) {
    this.router.navigate(['quote', id]);
  }

}
