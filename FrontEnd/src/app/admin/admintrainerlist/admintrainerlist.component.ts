import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admintrainerlist',
  templateUrl: './admintrainerlist.component.html',
  styleUrls: ['./admintrainerlist.component.css']
})

export class AdmintrainerlistComponent implements OnInit {
  trainerData:any=[]
  useremail:any ={
    email :''
   }
  pageTitle: string = 'Books';
 
  constructor(private http :HttpClient,private route :ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    this.getTrainerData()
    
     
  }
  getTrainerData(){
    this.http.get<any>("http://localhost:3000/getTrainerTimesheetforAdmiin").subscribe((data)=>{ 
     this.trainerData=data
    })
  }

 
}
