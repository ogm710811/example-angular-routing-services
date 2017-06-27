import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';



@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent implements OnInit {

  constructor( private theCounter: CounterService ) { }

  ngOnInit() {
  }
  incrementCounter() {
    this.theCounter.increment();
  }

}

/*
  Here’s what’s different because we want to use the CounterService:

  We imported the CounterService from the file (line #2).
  We added the CounterService to the new component metadata providers (line #10).
  We injected the service into the component constructor as a private property (line #14).
  We called CounterService's increment() method inside the incrementCounter() method (line #19).
*/
