import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financenavbar',
  templateUrl: './financenavbar.component.html',
  styleUrls: ['./financenavbar.component.css']
})
export class FinancenavbarComponent implements OnInit {

  constructor(private _router:Router) { }

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
