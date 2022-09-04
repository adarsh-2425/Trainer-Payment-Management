import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { timesheetmodel } from './timesheet';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  
  timesheet:timesheetmodel[]=[]
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
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
