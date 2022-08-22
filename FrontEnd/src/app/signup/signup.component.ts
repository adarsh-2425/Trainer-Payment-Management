import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    'firstName' : '',
    'lastName' : '',
    'email' : '',
    'phone' : '',
    'role' : '',
    'gender' : '',
    'password' : '',
    'cpassword' : '',
    
  }

  constructor() { }

  ngOnInit(): void {
  }
  signupUser(){
    
  }

}
