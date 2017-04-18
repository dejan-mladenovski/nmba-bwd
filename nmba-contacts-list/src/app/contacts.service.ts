import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactsService {
  private endpoint = 'http://localhost:4201/api';
  constructor(private http: Http) { }

  getContacts() {
    return this.http.get(`${this.endpoint}/contacts`).map((res) => res.json().items);
  }

  getContact(id: string) {
    return this.http.get(`${this.endpoint}/contacts/${id}`).map((res) => res.json().item);
  }

}
