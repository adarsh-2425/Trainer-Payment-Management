import { Component, OnInit } from '@angular/core';
declare var anime: any; 

@Component({
  selector: 'app-financedashboard',
  templateUrl: './financedashboard.component.html',
  styleUrls: ['./financedashboard.component.css']
})
export class FinancedashboardComponent implements OnInit {

  constructor() { }

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
