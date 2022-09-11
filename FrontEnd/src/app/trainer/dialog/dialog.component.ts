import { Component, OnInit } from '@angular/core';
import { timesheetmodel } from '../timesheet/timesheet';  
import { HttpClient } from '@angular/common/http';
import { TimesheetService } from 'src/app/timesheet.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  timesheet= new timesheetmodel('','','','','','')
  minDate = new Date(2022, 8, 1)
  maxDate = new Date(2022, 8, 30)
 

 name = localStorage.getItem('name')
 email =localStorage.getItem('email')

 username :string = JSON.parse(JSON.stringify(localStorage.getItem('name')))
 useremail: string = JSON.parse(JSON.stringify(localStorage.getItem('email')))
 
  constructor(private http : HttpClient, private _timesheet : TimesheetService, private route :ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {
   console.log(this.username)
   console.log(this.useremail)
  }

  addtimesheet(){
   
   console.log(this.timesheet)
   this._timesheet.sendTimesheet(this.timesheet).subscribe(()=>{
    alert('Timesheet Added')
    this.router.navigate(['./timesheet'],{relativeTo:this.route })
   });
   

  }
}
