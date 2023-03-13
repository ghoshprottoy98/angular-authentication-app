import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit{

  userDisplayName='';



  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('username');
   
    }



}
