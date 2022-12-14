import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './update-profile/user.model';


@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private http:HttpClient) { }

  
  


  sendTimesheet(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/addtimesheet",data)
  }
  
  getTimesheetData(data:any){
    console.log(data)
    return this.http.post<any>("http://localhost:3000/gettimesheet", data)
  }

  timesheetpdf(){
    return this.http.get("http://localhost:3000/timesheet")
  }

  
}

