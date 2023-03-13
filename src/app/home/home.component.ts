import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements  OnInit {
  userDisplayName='';
 

  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('username');
  
    }


 
  }
    

