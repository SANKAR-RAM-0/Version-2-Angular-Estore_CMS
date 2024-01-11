import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';
import { UserService } from '../Services/User.service';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-UserProfile',
  templateUrl: './UserProfile.component.html',
  styleUrls: ['./UserProfile.component.css']
})
export class UserProfileComponent implements OnInit {

  images:any;
  id:any;
  data:any;

  constructor(private service:ImageService, private user:UserService, private logger:NGXLogger) {
    //Retrieving image from json
    this.service.getimage().subscribe(data =>
    {
      this.images = data;
    })
  }

  ngOnInit() {
      this.logger.info('User accessed the Profile Page.');
      this.id = localStorage.getItem('userid');
      this.getdata();
    }

    //Retrieving user details from json
    getdata(){
      this.user.getProfiledata(this.id).subscribe(data =>
        {
          this.data = data;
        })
    }

  editProfile(): void {
    // Logic for editing the user profile
    // You can navigate to a separate edit profile page or show a modal for editing
  alert(this.id)
  }

}
