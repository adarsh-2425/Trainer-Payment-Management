import { Component, OnInit } from '@angular/core';
declare var anime: any; 

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
    anime.timeline({loop: true})
    .add({
      targets: '.c2 .word',
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: () => 800 * 1
    }).add({
      targets: '.c2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }

}
