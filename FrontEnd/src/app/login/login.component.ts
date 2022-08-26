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

  user:any ={email:[''],
            password:['']}

  constructor(private _auth:AuthService,  private _router:Router) { }

  ngOnInit(): void {
  }

        userverify(){
   
          this._auth.loginUser(this.user)
          .subscribe(
            res => {
             {
              localStorage.setItem('token',res.token)
              this._router.navigate(['/home'])
            }
          }
          )
          console.log('login ts file okay');
          
        }

}
