import { Component } from '@angular/core';
import { ImageService } from './Services/image.service';
import { AuthService } from './Services/auth.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Store_CMS';

  images: any;

  constructor(private service:ImageService, public auth:AuthService, private logger:NGXLogger) {

    // this.service.getimage().subscribe(data=>
    //   {
    //     this.images=data;
    //     console.log(data);
    //   })
  }


}
