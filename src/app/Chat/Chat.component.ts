import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator } from '@angular/forms';
import { Validators }  from '@angular/forms';
import { UserService } from '../Services/User.service';
import { DatePipe } from '@angular/common';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-Chat',
  templateUrl: './Chat.component.html',
  styleUrls: ['./Chat.component.css']
})
export class ChatComponent implements OnInit {

  userid = localStorage.getItem('userid');
  username = localStorage.getItem('username');
  userchat:any
  date = new Date();
  currentDate = this.datepipe.transform(this.date, 'dd MMM');
  currentTime = this.datepipe.transform(this.date, 'hh:mm a');

  constructor(private fb:FormBuilder ,private service:UserService, private datepipe:DatePipe, private logger:NGXLogger) {
    //Getting the user messages from the json
    setInterval(()=>{
    this.service.getusermessage().subscribe(message =>{
      this.userchat = message;
    })
  },100)
  }

  usermessage=this.fb.group({
    message:["",[Validators.required]],
    userid:[this.userid],
    username:[this.username],
    date:[this.currentDate],
    time:[this.currentTime]
  })


  // Storing the user message in json
  sendMessage() {
    this.service.sendusermessage(this.usermessage.value).subscribe(data=>{
      this.usermessage.reset();
    })
  }

  ngOnInit() {
    this.logger.info('User accessed the Chat Window.');
  }

}
