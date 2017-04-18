import { ActivatedRoute } from '@angular/router';
import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

    contact = {address: {}}
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .map(data => data['contact'])
    .subscribe(data => {this.contact = data});
  }

}
