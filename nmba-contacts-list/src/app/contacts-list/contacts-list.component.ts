import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nmba-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  private contacts = [];
  constructor() { }

  trackById(index: number, contact: any) {
    return contact.id;
  }

  ngOnInit() {
    this.contacts = [];
  }

}
