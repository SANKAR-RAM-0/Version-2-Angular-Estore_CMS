import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() {}


  // User profile authentication
  validateUser() {
  }

  // User Login function
  isAuthenticated():boolean {
    if(localStorage.getItem('userdata') !== null) {
      return true;
    }
    return false
  }

  // Admin login
  isAdmin():boolean {
    
    if(localStorage.getItem('Admin') !== null) {
      return true;
    }
    return false
  }





}
