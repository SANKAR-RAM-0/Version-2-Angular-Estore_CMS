import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-User-Details',
  templateUrl: './User-Details.component.html',
  styleUrls: ['./User-Details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userdetail:any;
  page:number=1;

  constructor(private service:UserService, private logger:NGXLogger) {
    //Retrieving user data from the json
    this.service.retrieveUser().subscribe(data =>
      {
        this.userdetail = data;
      })
   }

   //To delete user data from json
   deleteuser(id: string) {
    this.service.deleteUser(id).subscribe(data1 =>
      {
        alert('User deleted');
      })
   }

  ngOnInit() {
    this.logger.info('Admin accessed the UserDetail Page.');
  }

}
