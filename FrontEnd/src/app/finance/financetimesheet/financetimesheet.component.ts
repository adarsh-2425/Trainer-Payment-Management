import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/timesheet.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financetimesheet',
  templateUrl: './financetimesheet.component.html',
  styleUrls: ['./financetimesheet.component.css']
})
export class FinancetimesheetComponent implements OnInit {

  pdfs : any={
    Name:'',
    Email:'',
    pdf:''
  }

  constructor(private _timesheet : TimesheetService, 
    private http : HttpClient,  private router :Router) { }

  ngOnInit(): void {
    this._timesheet.timesheetpdf().subscribe((data)=>{
      this.pdfs=JSON.parse(JSON.stringify(data));
  })
  }

}
