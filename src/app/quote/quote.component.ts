import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quoteId: Number;

  constructor(private route: ActivatedRoute) { }

// The ActivatedRoute service provide us the route parameters through an Observable. 
// In order to retrieve it we need to subscribe to it.
 ngOnInit() {
    this.route.params
      .subscribe((params) => 
        // Calling Number() with params['id'] just converts the parameter from a string to a number.
        this.quoteId = Number(params['id']));
  }

}
