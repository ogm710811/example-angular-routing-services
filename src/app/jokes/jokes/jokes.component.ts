import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  providers: [JokesService]
})
export class JokesComponent implements OnInit {
  joke: any;

  constructor( private jokes: JokesService ) { }

  ngOnInit() {
  }

  /*
    we have a button that invokes the component’s getRandomJoke() method, 
    which in turn invokes the getRandom() method of the service. 
    Then we subscribe to the Observable response, assigning the 
    resulting joke to the instance property this.joke. 
    The this.joke property is then printed in a <pre> element in the template 
  */
  getRandomJoke() {
    this.jokes.getRandom()
      .subscribe((joke) => this.joke = joke);
  }

}
