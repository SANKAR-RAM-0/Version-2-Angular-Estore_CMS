import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, }  from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ConfirmedValidator } from '../Services/confirm.validator';
import { UserService } from '../Services/User.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ImageService } from '../Services/image.service';
import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  image:any

  constructor(private fb:FormBuilder, private service:UserService, private router:Router, private imageservice:ImageService, private logger:NGXLogger) {
    //Retrieving image from the json
    this.imageservice.getimage().subscribe(data =>
      {
        this.image = data;
      })
  }

  registerForm=this.fb.group({
    fname:["",[Validators.required,Validators.pattern("^(?!.+(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
    lname:["",[Validators.required,Validators.minLength(3)]],
    email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
    phoneno:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password:["",[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}")]],
    cpassword:["",[Validators.required]]
  },{validator:ConfirmedValidator('password','cpassword')})

  submitted=false;

  //Function to check if the form is valid or not before submitting
  validate() {
    this.submitted=true

    if(this.registerForm.invalid) {
      return
    }
    this.addUser()
  }

  //Adding user data to json
  addUser(){
    this.service.addUser(this.registerForm.value).subscribe(data=>{
      this.popup();
      this.router.navigate(['/Login']) //Navigating to homepage after login
    })
    this.logger.info('New User Registered.');
  }

  //Registration successful message
  popup() {
    Swal.fire('Registration Successful!!', 'Please login to continue', 'success');
  }

  ngOnInit() {
    this.logger.info('User accessed the Register Page.');
  }

}
