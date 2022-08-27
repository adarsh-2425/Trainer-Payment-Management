import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

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
    'password' : ''
    
    
  }

  constructor(private signupservice:SignupService, private _router:Router) { }

  ngOnInit(): void {
  }
  signupUser(){
   console.log(this.user)
   this.signupservice.sendUserData(this.user).subscribe();
   this._router.navigate(['/login']);
  }

}
