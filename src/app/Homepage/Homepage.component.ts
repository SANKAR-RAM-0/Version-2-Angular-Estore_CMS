import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';
import { UserService } from '../Services/User.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-Homepage',
  templateUrl: './Homepage.component.html',
  styleUrls: ['./Homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images: any;

  constructor(private service:ImageService, private logger:NGXLogger) {

    //Retrieving image from the json
    this.service.getimage().subscribe(data=>
      {
        this.images=data;
        console.log(data);
      })
  }

  ngOnInit() {
    this.logger.info('User accessed the Homepage.');
  }

}
