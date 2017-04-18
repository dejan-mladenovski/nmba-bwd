import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  private contactsUrl = 'http://localhost:4201/api';  // URL to web api

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get(this.contactsUrl+'/contacts').map(res=> res.json()).map(data => data.items);
  }
  getContact(id) {
    return this.http.get(this.contactsUrl+'/contacts/'+id).map(res=> res.json()).map(data => data.item);
  }
}
