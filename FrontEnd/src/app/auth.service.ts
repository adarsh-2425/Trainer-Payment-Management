import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getName(){
    return this.http.get('http://localhost:3000//users');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getRole(){
    return localStorage.getItem('role');
  }

  loginUser(user:any)  
  // above user coming from frontend input
{ 
  
  console.log('data reached service file');
  return this.http.post <any> ("http://localhost:3000/login",user)  
  // <any> was used to remove error in res.token from ts component
} 



loggedIn(){
  return !!localStorage.getItem('token')
}

}
