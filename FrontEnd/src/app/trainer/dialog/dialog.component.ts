import { Component, OnInit } from '@angular/core';
import { timesheetmodel } from '../timesheet/timesheet';  
import { HttpClient } from '@angular/common/http';




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
  
 
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  addtimesheet(){
   console.log(this.timesheet)
   return this.http.post('http://localhost:3000/addtimesheet',this.timesheet).subscribe()

  }
}
