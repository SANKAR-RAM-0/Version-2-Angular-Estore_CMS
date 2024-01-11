import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-ContactUs',
  templateUrl: './ContactUs.component.html',
  styleUrls: ['./ContactUs.component.css']
})
export class ContactUsComponent implements OnInit {

  images:any;

  constructor(private service:ImageService, private logger:NGXLogger) {

    //Retrieving images from the json
    this.service.getimage().subscribe(data =>
      {
        this.images = data;
      })
   }

  ngOnInit() {
    this.logger.info('User accessed the Contact Page.');
  }

}
