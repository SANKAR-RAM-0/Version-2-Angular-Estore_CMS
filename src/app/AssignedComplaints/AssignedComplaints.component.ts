import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-AssignedComplaints',
  templateUrl: './AssignedComplaints.component.html',
  styleUrls: ['./AssignedComplaints.component.css']
})
export class AssignedComplaintsComponent implements OnInit {

  details:any
  page:number= 1;

  constructor(private service:UserService, private logger:NGXLogger) {

    //Retrieving the assigned complaints details from json
    this.service.retrieveassignedcomplaint().subscribe(data =>
      {
        this.details = data;
      })
  }


  ngOnInit() {
    this.logger.info('Admin accessed the Assigned Complaint Page.');
}
}
