import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http:HttpClient) { }

  loginUser(user:any)  
  // above user coming from frontend input
{ 
  
  console.log('data reached service file');
  return this.http.post <any> ("http://localhost:3000/login",user)  
  // <any> was used to remove error in res.token from ts component
} 
  getUser(id:any){
  return this.http.get('http://localhost:3000/'+id);
}

  updateProfile(user:any)
  {
    console.log('updateProfile')
    return this.http.put("http://localhost:3000/updateProfile",user)
    .subscribe(data =>{console.log(data)})
  }

  loggedIn(){
  return !!localStorage.getItem('token')
}

}
