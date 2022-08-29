import { Component, OnInit } from '@angular/core';
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
            roles : ''}

  
  

  constructor(private _auth:AuthService,  private _router:Router) { 
    // this.roles = [
    //   'Admin',
    //   'Trainer',
    //   'Finance Team'
    // ]
  }
  

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
                this._router.navigate(['/dashboard'])
              }

              // route to Finance Team dashboard
              else{
                this._router.navigate(['/financehome'])
              }
            }
          }
          )
          ;
          
          console.log('login ts file okay');
          
        }

}
