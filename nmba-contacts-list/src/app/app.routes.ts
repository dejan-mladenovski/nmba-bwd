import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';
import {ContactResolve} from './contact-resolve.service';

export const APP_ROUTES: Routes = [
    {path: 'about', component: AboutComponent },
    {path:'', component: ContactsDashboardComponent, children:[
      { path: '', redirectTo: '/contact/0', pathMatch: 'full' },
      { path: 'contact/:id', component: ContactDetailsComponent, resolve: {
          contact: ContactResolve
        }
      }
      ]
    },
    {path:'**', redirectTo: ''}
];
