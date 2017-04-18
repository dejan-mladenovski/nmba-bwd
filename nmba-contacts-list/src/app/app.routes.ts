import { ContactResolve } from './services/contact-resolver.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';

export const APP_ROUTES: Routes = [
    {path: 'about', component: AboutComponent },
    {path:'', component: ContactsDashboardComponent, children:[
      { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
      { path: 'contact/:id', component: ContactDetailsComponent, resolve:{
        contact: ContactResolve
        } 
      }
      ]
    },
    {path:'**', redirectTo: ''}
];
