import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import * as _ from 'underscore';

@Injectable()
export class JokesService {

  constructor( private http: Http ) { }

  getRandom() {
    return this.http.get('http://api.icndb.com/jokes/random')
      .map((res) => res.json()); //<-- take the response and use the map method to 
                                  //    parse the JSON string from the API into a JavaScript object.
  }

}
