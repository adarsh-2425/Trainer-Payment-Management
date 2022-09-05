import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor() { }

    // get name from localstorage and assigns to 'name'. Process is called data binding
    name: string = localStorage.getItem("name")!;
    
  ngOnInit(): void {
  }

}
