import { Component, OnInit } from '@angular/core';


import { ContactService } from '../contact.service';

@Component({
  selector: 'nmba-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
   contacts:any = [];


  constructor(private contactsService: ContactService) {

  }

  trackById(index: number, contact: any) {
    return contact.id;
  }

  ngOnInit() {
    this.contacts =  this.contactsService.getContacts() ;

  }

}
