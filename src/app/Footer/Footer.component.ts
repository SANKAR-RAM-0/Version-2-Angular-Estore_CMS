import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.css']
})
export class FooterComponent implements OnInit {

  image:any

  constructor(private service:ImageService) { }

  ngOnInit() {

    //Retrieving image from json
    this.service.getimage().subscribe(data =>
      {
        this.image = data;
      })
  }

  //Popup-----
  showPopup: boolean = false;

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

}
