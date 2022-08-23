import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  sendUserData(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/signup",data)
  }
}
