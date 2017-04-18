import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactService } from './contact.service';

import { APP_ROUTES } from './app.routes';
import { ContactResolveService } from './contact-resolve.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsDashboardComponent,
    ContactsListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ContactService,ContactResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
