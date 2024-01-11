import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../Services/auth.service';
import { ImageService } from '../Services/image.service';
import { UserService } from '../Services/User.service';
import { environment } from 'src/environments/environment';
import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  submitted=false;
  image:any;
  userid:any;
  username:any;

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router, private auth:AuthService, private service:ImageService, private user:UserService, private logger:NGXLogger) {

    //Retrieving images from the json
    this.service.getimage().subscribe(data =>
      {
        this.image = data;
      })
  }

  loginForm=this.fb.group({
    email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
    password:["",[Validators.required]],
  })

  //Function to check if the form is valid or not before submitting
  validate() {
    this.submitted=true

    if(this.loginForm.invalid) {
      return
    }
    this.validateUser();
  }

 // --------------Login validation-------------
  validateUser(){
    if(this.loginForm.value.email == environment.adminid && this.loginForm.value.password == environment.password) {
      this.router.navigate(['/Admin']);
      this.logger.info('Admin Logged In.');
      localStorage.setItem('Admin', JSON.stringify(this.loginForm.value.email));
    }
    else {
      this.http.get(environment.userdataUrl).subscribe((data:any)=>{
        const users=data.find((result:any)=>{
          this.userid = result.id;
          this.username = result.fname;
          return result.email == this.loginForm.value.email && result.password == this.loginForm.value.password
        })
        if(users) {
          this.welcome();
          this.logger.info('User Logged In.');
          this.user.userid = this.userid;
          localStorage.setItem('userdata', JSON.stringify(users.email));
          localStorage.setItem('username',(this.username));
          localStorage.setItem('userid', (this.userid));
        }
        else {
          this.notfound();
        }
      })

    }
  }

  //Shows welcome message after logged in
  welcome() {
    Swal.fire('Welcome!!', 'Logged in successfully', 'success');
    this.router.navigate(['/Home']);
  }

  //Popup message if the user data is invalid
  notfound() {
    Swal.fire({
      icon: 'error', title: 'Oops..',
      text: 'Invalid Credentials!',
    })
  }

  ngOnInit() {
    this.logger.info('User accessed the Login Page.');
  }

}
