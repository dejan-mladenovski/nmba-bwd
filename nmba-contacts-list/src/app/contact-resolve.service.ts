import { Injectable } from '@angular/core';
import { ContactService } from './contact.service';
import {ActivatedRouteSnapshot} from "@angular/router";

@Injectable()
export class ContactResolveService {


  constructor(private contactsService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot)  {
    return this.contactsService.getContact(route.params['id'])
  }

}
