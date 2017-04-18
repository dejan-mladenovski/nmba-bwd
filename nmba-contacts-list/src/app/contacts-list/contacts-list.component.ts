import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {ContactsService} from '../contacts.service';

import {Contact} from '../models/contact';

@Component({
  selector: 'nmba-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  private contacts: Observable<Contact>;
  constructor(private contactService: ContactsService) { }

  trackById(index: number, contact: any) {
    return contact.id;
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
