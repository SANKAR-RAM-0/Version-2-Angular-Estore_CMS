import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageUrl:any="http://localhost:3000/images";

constructor( private http:HttpClient, private logger:NGXLogger) { }

//To get images from json
getimage() {
  return this.http.get(this.imageUrl);
}

NgOnInIt() {
  this.logger.info('User accessed the Image Service.');
}

}
