import { Component, OnInit } from '@angular/core';
import { PaypackageService } from 'src/app/paypackage.service';


@Component({
  selector: 'app-paypackage',
  templateUrl: './paypackage.component.html',
  styleUrls: ['./paypackage.component.css']
})
export class PaypackageComponent implements OnInit {

  paypackages=[{
    Program:'',
    Category:'',
    SubCategory:'',
    Mode:'',
    Duration:'',
    ParticipantCount:'',
    OtherActivities:'',
    Pay:''
  }]

  constructor(private paypackageService:PaypackageService) { }

  ngOnInit(): void {
    this.paypackageService.getPaypackages().
    subscribe((data) => {
      this.paypackages=JSON.parse(JSON.stringify(data));
    })
  }
}
