import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {
   tickets: Ticket[] = [];
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.tickets = this.ticketService.onViewTickets();
    console.log("tickets in view",this.tickets);
  }

}
