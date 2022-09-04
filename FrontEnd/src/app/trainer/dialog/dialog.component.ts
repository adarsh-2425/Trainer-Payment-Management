import { Component, OnInit } from '@angular/core';
import { timesheetmodel } from '../timesheet/timesheet';  


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  timesheet= new timesheetmodel('','','','','','')
  constructor() { }

  ngOnInit(): void {
  }

  addtimesheet(){
   console.log(this.timesheet)
  }
}
