import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-dashboard',
  templateUrl: './contacts-dashboard.component.html',
  styleUrls: ['./contacts-dashboard.component.scss']
})
export class ContactsDashboardComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    
  }

}
