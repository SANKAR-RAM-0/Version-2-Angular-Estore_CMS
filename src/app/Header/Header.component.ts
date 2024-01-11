import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ImageService } from '../Services/image.service';
import { AuthService } from '../Services/auth.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  images: any;
  username: any;

  constructor(private service:ImageService, public auth:AuthService, private router:Router, private logger:NGXLogger) {

    //Retrieving image from the json
    this.service.getimage().subscribe(data=>
      {
        this.images=data;
      })
      //Getting username from localstorage
      setInterval(()=>{
        this.username = localStorage.getItem('username');
      }),100
  }

  status:string ="default";

  logout() {
    Swal.fire({
      text: "Are you sure you want to log out?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',cancelButtonColor: '#d33',confirmButtonText: 'Yes',cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('username');
        localStorage.removeItem('userdata');
        localStorage.removeItem('userid');
        this.router.navigate(['/Home'])
        this.outmessage();
        this.logger.info('User Logged Out.');
      }
    })
  }

  //Successfully logout message
  outmessage() {
    Swal.fire(
      'Logged Out',
      'Successfully!',
      'success'
    )
  }

  ngOnInit() {
  }

}
