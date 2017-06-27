import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactId: Number;
  //optionalParameter: string;

  //constructor( private route: ActivatedRoute ) { }

  constructor() { }

  /*
    In this component we can see we have two ways to send optional parameters:

    1. Using the [queryParams] directive on a link
    2. Sending an extra object in the navigate method of the router service
    Since these parameters are optional, our Routes don’t need any extra configuration,
    we just need to change the way we read parameters:
  */
   ngOnInit() {
    // this.route.params
    //   .subscribe((params) => 
    //     this.contactId = Number(params['id']));

    //  this.route.queryParams
    //   .subscribe((queryParams) => {
    //     this.optionalParameter = queryParams['foo'];
    // });
  }
}

/****************All coment out were moved to 
 * contac-overview.component.ts
 * ******* */