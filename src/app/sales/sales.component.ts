import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{
  userDisplayName='';
  
  


  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('username');
   
    }

}
 

    

