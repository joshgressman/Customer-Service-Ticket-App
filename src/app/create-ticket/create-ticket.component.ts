import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  myForm: FormGroup;

  issueTypes = ['Member Billing', 'Member Cancel', 'Member Refund', 'Health Insurance', 'Member Complaint', 'Kids Room', 'Personal Training', 'Employee Payroll', 'Issue w/member'];
  locations  = ['Eagan', 'Eden Prairie', 'Lakeville'];

  constructor() { }

  onSubmit() {
    const ticket = new Ticket(
      this.myForm.value.title,
      this.myForm.value.type,
      this.myForm.value.location,
      this.myForm.value.customerName,
      this.myForm.value.memberNumber,
      this.myForm.value.date,
      this.myForm.value.description,
      this.myForm.value.priority,
      this.myForm.value.notes = '',
      this.myForm.value.employeeName,
      this.myForm.value.status
    );
    console.log("new task", ticket);
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      customerName: new FormControl(null, Validators.required),
      memberNumber: new FormControl(null),
      date: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      notes: new FormControl(null),
      employeeName: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
    });
  }

}
