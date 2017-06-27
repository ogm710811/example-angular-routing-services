import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  /*
    We have 2 instance properties:
    originalContact is the contact stored in our service
    editContact is the contact we show to the user to edit
  */
  originalContact: any;
  editContact: any;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    // The edit route needs to access the parent snapshot to read the same params with:
     let paramId = +this.route.snapshot.parent.params['id'];
     this.originalContact = this.contactService.get(paramId);
     this.editContact = {
       id: this.originalContact.id,
       name: this.originalContact.name
     };
    // which is not an Observable to subscribe but a plain string variable.
    // Once retrieved the parameter, it can load the contact using the contactService and display the form.
  }
  // The save method just replace the original contact with the edited one.
  save() {
    this.originalContact = this.contactService.edit(this.editContact);
  }

}
