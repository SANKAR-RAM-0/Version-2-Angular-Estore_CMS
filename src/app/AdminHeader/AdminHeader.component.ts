import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-AdminHeader',
  templateUrl: './AdminHeader.component.html',
  styleUrls: ['./AdminHeader.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private router:Router, private logger:NGXLogger) { }

  ngOnInit() {
  }

  //Logout-----
  Logout(){
    localStorage.removeItem('Admin');
    this.router.navigate(['/Home']);
    this.logger.info('Admin Logged Out.');
  }
}
