import { Injectable } from '@angular/core';

// what we have?
/*
    A class CounterService that is our service and is prefixed with the @Injectable decorator.
    The Injectable decorator is imported from the @angular/core library.
    The CounterService exposes a method called increment that increments and logs the current count.
*/
@Injectable()
export class CounterService {
    count: number = 0;
    constructor() { }

    increment() {
        this.count++;
        console.log(`Count is now ${this.count}`);
    }
}