import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrievancePageComponent } from './GrievancePage/GrievancePage.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { AdminComponent } from './Admin/Admin.component';
import { AuthenticationGuard } from './Services/authentication.guard';
import { ProductsComponent } from './Products/Products.component';
import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { AssignedComplaintsComponent } from './AssignedComplaints/AssignedComplaints.component';
import { UserDetailsComponent } from './User-Details/User-Details.component';
import { TrackComplaintComponent } from './TrackComplaint/TrackComplaint.component';
import { ChatComponent } from './Chat/Chat.component';
import { AdminChatComponent } from './AdminChat/AdminChat.component';


const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:'Home',
    component:HomepageComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'Grievance filling page',
    component:GrievancePageComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'ContactUs',
    component:ContactUsComponent
  },
  {
    path:'Admin',
    component:AdminComponent
  },
  {
    path:'Products',
    component:ProductsComponent
  },
  {
    path:'Profile',
    component:UserProfileComponent
  },
  {
    path:'Forgotpassword',
    component:ForgotPasswordComponent
  },
  {
    path:'AssignedComplaint',
    component:AssignedComplaintsComponent
  },
  {
    path:'UserDetail',
    component:UserDetailsComponent
  },
  {
    path:'TrackComplaint',
    component:TrackComplaintComponent
  },
  {
    path:'Chat',
    component:ChatComponent
  },
  {
    path:'AdminChat',
    component:AdminChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
