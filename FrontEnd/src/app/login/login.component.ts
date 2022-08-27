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
              


              this._router.navigate(['/admindashboard'])
            }
          }
          )
          ;
          
          console.log('login ts file okay');
          
        }

}
