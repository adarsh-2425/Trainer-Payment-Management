import { Component, OnInit } from '@angular/core';
import { timesheetmodel } from '../timesheet/timesheet';  


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  timesheet= new timesheetmodel('','','','','','')
  minDate = new Date(2022, 8, 1)
  maxDate = new Date(2022, 8, 30)
  constructor() { }

  ngOnInit(): void {
  }

  addtimesheet(){
   console.log(this.timesheet)
  }
}
