import { Component, OnInit } from '@angular/core';


import { ContactService } from '../contact.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact = {address: {}};

  constructor(private route: ActivatedRoute) {

  }


  ngOnInit() {
    let id = this.route.data.map(data=>data['contact']).subscribe(contact=>{
      this.contact = contact;
    })
  }
}
