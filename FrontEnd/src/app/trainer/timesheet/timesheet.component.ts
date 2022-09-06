import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { timesheetmodel } from './timesheet';
import { TimesheetService } from 'src/app/timesheet.service';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent implements OnInit {
  
  timesheet:timesheetmodel[]=[]
  constructor(private dialog:MatDialog, private dialogVariable :DialogComponent,
    private _timesheet2 : TimesheetService ) { }

  ngOnInit(): void {
   
  this._timesheet2.getTimesheetData(this.dialogVariable.useremail).subscribe()

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
}
