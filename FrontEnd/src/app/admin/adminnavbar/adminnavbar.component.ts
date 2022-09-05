import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor(private _router:Router, private _auth:AuthService) { }

  ngOnInit(): void {
  }

  logoutUser()
{
localStorage.removeItem('token')
localStorage.removeItem('email')
localStorage.removeItem('name')
localStorage.removeItem('userId')
this._router.navigate(['/home'])
}

}
