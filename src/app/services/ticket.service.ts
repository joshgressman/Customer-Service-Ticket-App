
import { Ticket } from '../models/ticket.model';

export class TicketService {
  tickets: Ticket[] = [];

  onAddTicket(ticket: Ticket) {
    this.tickets.push(ticket);
    console.log(this.tickets);
  }

  onViewTickets(){
    return this.tickets.slice();
  }
}
