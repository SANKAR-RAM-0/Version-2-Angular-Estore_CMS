import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-TrackComplaint',
  templateUrl: './TrackComplaint.component.html',
  styleUrls: ['./TrackComplaint.component.css']
})
export class TrackComplaintComponent implements OnInit {

  complaints:any
  userId:any
  assigned:any

  constructor(private service:UserService, private logger:NGXLogger) {
    //Retrieving complaints from the json
    this.service.retrieveComplaint().subscribe(data =>
      {
        this.complaints = data;
      })

      //Retrieving assigned complaint details from the json
    this.service.retrieveassignedcomplaint().subscribe(res =>
      {
        this.assigned = res;
      })
   }

   //Toggle to view the complaint in detail
  toggleDetails(complaint: any) {
    complaint.showDetails = !complaint.showDetails;
  }

  ngOnInit() {
    this.logger.info('User accessed the Track Complaint Page.');
    //Getting the userid from the localstorage
    this.userId = localStorage.getItem('userid');
  }


  closeComplaint() {

  }

}
