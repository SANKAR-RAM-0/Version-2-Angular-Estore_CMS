import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent implements OnInit {

  complaints: any;
  details: any;
  page:number= 1;

  constructor(private service:UserService, private fb:FormBuilder, private datepipe:DatePipe, private logger:NGXLogger) {

    //Retrieving complaints from json
    this.service.retrieveComplaint().subscribe(data =>
      {
        this.complaints = data;
        console.log(data);
      })

      //Retrieving engineers details from json
      this.service.details().subscribe(response =>
        {
          this.details = response;

        })

  }

  //Accept complaint------
  isAccepted: boolean = false;

  acceptComplaint() {
    this.isAccepted = true;
  }

  ngOnInit() {
    this.logger.info('Admin accessed the Assigned Dashboard.');
  }

  //popup for reject complaint-----
  showPopup = false;
  rejectReason = '{{rejectReason}}';
  reason:any;

  showRejectPopup() {
    this.rejectReason = '';
    this.showPopup = true;
  }

  submitRejection() {
    this.showPopup = false;
  }

  closePopup() {
    this.showPopup = false;
  }


  //Assign complaints-------------------------------------

  date = new Date();
  currentDate : string = new Date().toDateString();
  currentTime = this.datepipe.transform(this.date, 'hh:mm a');

  assignedForm = this.fb.group({
    id:["",[Validators.required]],
    engineerName:["",[Validators.required]],
    detail:["The above mentioned person will contact you soon"],
    date: [this.currentDate],
    time:[this.currentTime]
  })

  submitted=false;

  validate() {
    this.submitted=true

    if(this.assignedForm.invalid) {
      return
    }
    // this.assignComplaint()
  }

  assignComplaint(data:any) {
    console.log(data);
    this.service.assignEngineer(this.assignedForm.value).subscribe(data=>{
      this.popup();
    })
  }

  //Success Message
  popup() {
    Swal.fire('Assigned Successfully!!', '', 'success');
  }
}








