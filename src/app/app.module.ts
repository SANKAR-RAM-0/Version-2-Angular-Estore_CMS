import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { RegisterComponent } from './Register/Register.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Login/Login.component';
import { GrievancePageComponent } from './GrievancePage/GrievancePage.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import Swal from 'sweetalert2';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { AdminComponent } from './Admin/Admin.component';
import { ProductsComponent } from './Products/Products.component';
import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { DatePipe } from '@angular/common';
import { AssignedComplaintsComponent } from './AssignedComplaints/AssignedComplaints.component';
import { AdminHeaderComponent } from './AdminHeader/AdminHeader.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { UserDetailsComponent } from './User-Details/User-Details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrackComplaintComponent } from './TrackComplaint/TrackComplaint.component';
import { ChatComponent } from './Chat/Chat.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';
import { AdminChatComponent } from './AdminChat/AdminChat.component';
import { UniquePipe } from './Pipes/Unique.pipe';


@NgModule({
  declarations: [
    AppComponent,
      HomepageComponent,
      RegisterComponent,LoginComponent,
      GrievancePageComponent,
      ContactUsComponent,HeaderComponent,FooterComponent,
      AdminComponent,
      AdminComponent,
      AdminComponent,
      ProductsComponent,
      UserProfileComponent,
      ForgotPasswordComponent,
      AssignedComplaintsComponent,
      AdminHeaderComponent,
      DashboardComponent,
      UserDetailsComponent,
      TrackComplaintComponent,
      ChatComponent,
      AdminChatComponent,UniquePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule, FontAwesomeModule, NgxPaginationModule,
    LoggerModule.forRoot({serverLoggingUrl:environment.logUrl, timestampFormat: 'dd MMM,yyyy hh:mm:ss a' ,level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.TRACE})
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
