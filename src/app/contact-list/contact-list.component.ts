import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Object>

/*
  This time, instead of hard-coding our array of contacts in the component class, 
  we used the created contact service, which provide 2 methods 
  to retrieve one or all the contacts and another method to edit a contact.

*/
  constructor( 
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contacts = this.contactService.getList();
  }

   /*
    In this component we can see we have two ways to send optional parameters:

    1. Using the [queryParams] directive on a link
    2. Sending an extra object in the navigate method of the router service
    Since these parameters are optional, our Routes don’t need any extra configuration,
    we just need to change the way we read parameters:
  */
  viewDetails(id, param){
    this.router.navigate(['contact', id], { queryParams: { foo: param }});
  }

}
