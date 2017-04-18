import { ContactService } from './contact.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ContactResolve {

  constructor(private contactsService: ContactService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.contactsService.getContact(route.paramMap.get('id'));
  }
}