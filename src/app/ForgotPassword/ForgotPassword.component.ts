import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-ForgotPassword',
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  images:any;

  constructor(private service:ImageService, private logger:NGXLogger) {

    //Retrieving image from json
    this.service.getimage().subscribe(data =>
      {
        this.images = data;
      })
  }

  submitForm() {

  }

  ngOnInit() {
    this.logger.info('User accessed the Forgot Password Page.');
  }

}
