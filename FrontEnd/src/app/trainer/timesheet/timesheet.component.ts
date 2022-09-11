import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { TimesheetService } from 'src/app/timesheet.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent implements OnInit {
  
  
  userData:any=[]
  constructor(private dialog:MatDialog, private _timesheet : TimesheetService, 
    private http : HttpClient,  private router :Router,
    private route :ActivatedRoute ) { }

  ngOnInit(): void {


   var useremail ={
    email :localStorage.getItem('email')
   }

//Fetch Trainer Data
  this._timesheet.getTimesheetData(useremail).subscribe((data:any)=>{
    console.log(data)
   this.userData=data 
  })

  }

  //Function to open Dialog box
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
       height :'40%'
       width : '60%'
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //Delete timesheet
  deleteTimesheet(user:any){
    console.log(user._id)
   this.http.delete<any>("http://localhost:3000/deletetimesheet/"+user._id).subscribe(()=>{
    alert("Timesheet Deleted");
    window.location.reload()
   }
    
   )
    
   
   
   
   
  }
}
