import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  myForm: FormGroup;
  issueTypes = ['Member Billing', 'Member Cancel', 'Member Refund', 'Health Insurance', 'Member Complaint', 'Kids Room', 'Personal Training', 'Employee Payroll', 'Issue w/member'];
  locations  = ['Eagan', 'Eden Prairie', 'Lakeville'];

  constructor() { }


}
