import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})

export class FinanceComponent implements OnInit{

userDisplayName = '';

  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('username');

  }


}
