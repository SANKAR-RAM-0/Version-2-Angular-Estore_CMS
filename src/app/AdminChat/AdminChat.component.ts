import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-AdminChat',
  templateUrl: './AdminChat.component.html',
  styleUrls: ['./AdminChat.component.css']
})
export class AdminChatComponent implements OnInit {

  usermessage:any;
  selectedUserId: any;
  username:any
  admin:any;
  date = new Date();
  currentDate = this.datepipe.transform(this.date, 'dd MMM');
  currentTime = this.datepipe.transform(this.date, 'hh:mm a');
  repliedto: string |null ="";

  constructor(private service:UserService, private fb:FormBuilder, private datepipe:DatePipe) {

    this.service.getusermessage().subscribe(data =>{
      this.usermessage = data;
    })

    this.service.retrieveUser().subscribe(data2 => {
      this.username = data2;
    })

    setInterval(()=>{
    this.service.getadminmessage().subscribe(data1 =>{
      this.admin = data1;
    })
  },100)

  this.repliedto = localStorage.getItem('name');
}

  adminmessage=this.fb.group({
    message:["",[Validators.required]],
    messagedto:[this.repliedto],
    date:[this.currentDate],
    time:[this.currentTime]
  })

  selectedChatName: string | null = null;

  openChat(chatName: string) {
    this.selectedChatName = chatName;
    localStorage.setItem('name', this.selectedChatName);
  }

  closeChat() {
    this.selectedChatName = null;
  }

  sendMessage() {
    this.service.sendadminmessage(this.adminmessage.value).subscribe(response =>{
      this.adminmessage.reset();
    })
  }

  ngOnInit() {
  }

}
