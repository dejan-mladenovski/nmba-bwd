
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService{

    constructor(private http: Http){}

    getContacts(){
        return this.http.get(`http://localhost:4201/api/contacts`).map(response => response.json().items);
    }

    getContact(id:string){
        return this.http.get(`http://localhost:4201/api/contacts/${id}`).map(response => response.json().item);
    }
}