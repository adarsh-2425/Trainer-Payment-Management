import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private http:HttpClient) { }

  loginUser(user:any)  
  // above user coming from frontend input
{ 
  
  console.log('data reached service file');
  return this.http.post("http://localhost:3000/login",user)  
} 
}
