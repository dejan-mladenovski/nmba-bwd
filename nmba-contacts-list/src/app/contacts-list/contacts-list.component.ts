import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nmba-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts:any = [];
  constructor(private contactService: ContactService) { }

  trackById(index: number, contact: any) {
    return contact.id;
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
