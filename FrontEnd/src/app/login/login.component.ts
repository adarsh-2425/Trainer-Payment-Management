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

  user:any ={email:'',
            password:'',
            roles : ''};

  message:string = '';
  messageClass  = 'd-none';

  constructor(private _auth:AuthService,  private _router:Router) {  }
  
  
  ngOnInit(): void {
  }

        userverify(){  
          this._auth.loginUser(this.user)
          .subscribe(
            res => {
             {
              
              localStorage.setItem('token',res.token)
              // route to Admin dashboard
              if('Admin' == res.role){
                this._router.navigate(['/adminhome'])
              }

              // route to trainer dashboard
              else
              if('Trainer' == res.role){
                this._router.navigate(['/signup'])
              }

              // route to Finance Team dashboard
              else{
                this._router.navigate(['/home'])
              }
            }
          }
          );
          ;
          
          console.log('login ts file okay');
          
        }

}
