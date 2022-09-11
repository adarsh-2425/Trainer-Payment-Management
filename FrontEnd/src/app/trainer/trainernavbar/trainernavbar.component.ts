import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainernavbar',
  templateUrl: './trainernavbar.component.html',
  styleUrls: ['./trainernavbar.component.css']
})
export class TrainernavbarComponent implements OnInit {

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
