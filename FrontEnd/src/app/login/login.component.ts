import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any ={
    userid:'',
    email:'',
            password:'',
            roles : ''};

  message:string = '';
  messageClass  = 'd-none';
  userId:any;

  constructor(private _auth:AuthService,  private _router:Router) {  }
  
  
  ngOnInit(): void {
  }

        userverify(){  
          this._auth.loginUser(this.user)
          .subscribe(
            (res) => {
              {
              
              // setting token, email, name in the localstorage of frontend
              localStorage.setItem('token',res.token)
              localStorage.setItem('name',res.name)
              // localStorage.setItem('id',res.id)
              let userId = res.id;
              let email = res.email;

              localStorage.setItem('userId',userId.toString());
              localStorage.setItem('email',email.toString());

             
              
              
              // route to Admin dashboard
              if('Admin' == res.role){
                this._router.navigate(['/adminhome/admindashboard'])
              }

              // route to trainer dashboard
              else
              if('Trainer' == res.role){
                this._router.navigate(['/trainerhome/dashboard/'])
              }

              // route to Finance Team dashboard
              else{
                this._router.navigate(['/financehome/financedashboard'])
              }
            
              }
            }
          
          )
          ;
          
          console.log('login ts file okay');
          
          
          
        }

}
