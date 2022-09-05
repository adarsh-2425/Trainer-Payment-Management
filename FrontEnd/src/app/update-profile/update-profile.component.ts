import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  userItem= {
    First_Name:'',
    Last_Name:'',
    Email:'',
    Mobile_Number:'',
    Gender:'',
    Role:'',
    password:''
    }

  constructor(private _router:Router,private _auth:AuthService) { }

  

  ngOnInit(): void {
    let id = localStorage.getItem("userId");
    console.log(id);
    
    this._auth.getUser(id).subscribe((data)=>{
      this.userItem=JSON.parse(JSON.stringify(data));
    })
      
  }
  
  updateProfile()
  {    
    this._auth.updateProfile(this.userItem);   
    alert("Update Success");
    this._router.navigate(['adminhome']);
  }

}
