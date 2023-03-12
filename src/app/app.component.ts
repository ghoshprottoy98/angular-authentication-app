import { Component,DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'authentication';
  isMenuOpen=false;
  isadmin=false;
  isMenuVisible=false;
  userDisplayName='';
  userDepartment='';


  
  constructor(private route:Router){
    let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isadmin=true;
    }
  }
  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role=sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }




  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('username');
    this.userDepartment = sessionStorage.getItem('department');
    }


    toggleMenu():void{
      this.isMenuOpen = !this.isMenuOpen;
    }
}