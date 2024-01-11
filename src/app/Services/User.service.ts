import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userid:any;

constructor(private http:HttpClient) { }

  // json URL
  userUrl:any="http://localhost:3000/userProfile";
  complaintUrl:any="http://localhost:3000/userComplaints";
  statusUrl:any="http://localhost:3000/Status";
  assigned:any="http://localhost:3000/assigned";
  detailsUrl:any="http://localhost:3000/enginnerDetails";
  getprofileUrl:any="http://localhost:3000/userProfile/";
  viewcomplaint:any="http://localhost:3000/userComplaints/";
  usermessage:any="http://localhost:3000/userchat";
  adminmessage:any="http://localhost:3000/adminchat"
  username:any="http://localhost:3000/usernames";

  //Add User
  addUser(body:any){
    return this.http.post<any>(this.userUrl,body);
  }

  //Retrieve User data
  retrieveUser(){
    return this.http.get(this.userUrl);
  }

  //Add Complaint
  addComplaint(body:any){
    return this.http.post(this.complaintUrl,body);
  }

  // Retrieve Complaints
  retrieveComplaint() {
    return this.http.get(this.complaintUrl);
  }

  //assigned complaint
  assignEngineer(body:any){
    return this.http.post(this.assigned,body);
  }

  //Retrieve assigned complaints
  retrieveassignedcomplaint(){
    return this.http.get(this.assigned);
  }

  //Products
  details() {
    return this.http.get(this.detailsUrl);
  }

  //Get user details
  getprofile() {
    return this.http.get(this.getprofileUrl);
  }

  //Get user details based on id
  getProfiledata(id: string) {
    return this.http.get(this.getprofileUrl +id);
  }

  //View user complaint
  getusercomplaint(userId: string) {
    return this.http.get(this.viewcomplaint +userId);
  }

  //Send user message
  sendusermessage(body: any){
    return this.http.post<any>(this.usermessage,body);
  }
  //Get user message
  getusermessage() {
    return this.http.get(this.usermessage);
  }

  //Delete User
  deleteUser(id:any) {
    return this.http.delete(this.getprofileUrl +id);
  }

  // get usernames
  getusername() {
    return this.http.get(this.username);
  }

  //Store admin message
  sendadminmessage(body:any) {
    return this.http.post<any>(this.adminmessage, body);
  }

  // get admin message
  getadminmessage() {
    return this.http.get(this.adminmessage);
  }
}
