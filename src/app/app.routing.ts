
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';

const APP_ROUTES: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'create-ticket', component: CreateTicketComponent},
 {path: 'view-tickets', component: ViewTicketsComponent}

]

export const routing = RouterModule.forRoot(APP_ROUTES);
