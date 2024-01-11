import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../Services/User.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-GrievancePage',
  templateUrl: './GrievancePage.component.html',
  styleUrls: ['./GrievancePage.component.css']
})
export class GrievancePageComponent implements OnInit {

  date = new Date();
  currentDate = this.datepipe.transform(this.date, 'dd MMM,yyyy');
  currentTime = this.datepipe.transform(this.date, 'hh:mm a');
  complaintId = new Date().getDate();
  userId = localStorage.getItem('userid');
  status="Open";

  constructor(private fb:FormBuilder, private service:UserService, private datepipe:DatePipe,private logger:NGXLogger) { }

  complaintForm=this.fb.group({
    complaintId:[this.complaintId],
    userId:[this.userId],
    name:["",[Validators.required,Validators.minLength(4)]],
    address:["",[Validators.required]],
    city:["",[Validators.required,Validators.minLength(3)]],
    pincode:["",[Validators.required,Validators.minLength(6)]],
    pname:["",[Validators.required]],
    invoice:["",[Validators.required,Validators.minLength(5)]],
    description:["",[Validators.required]],
    outcome:["",[Validators.required]],
    date:[this.currentDate],
    time:[this.currentTime],
    status:[this.status],
  })

  submitted=false;


  validate() {
    this.submitted=true

    if(this.complaintForm.invalid) {
      return
    }
    this.addComplaint()
  }

  //Addiong complaints to the json
  addComplaint(){
    this.service.addComplaint(this.complaintForm.value).subscribe(data=>{
      this.popup();
    })
    this.logger.info('User Registered a Complaint.');
    this.complaintForm.reset(); //Resetting the form values
  }

  //Success message
  popup() {
    Swal.fire('Complaint lodged Successfully!!', 'We will reach out to you as soon as possible', 'success');
  }

  ngOnInit() {
    this.logger.info('User accessed the Complaint Form Page.');
  }

}
