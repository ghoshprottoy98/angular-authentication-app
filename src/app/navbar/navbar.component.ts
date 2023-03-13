import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  isMenuOpen=false;
  isadmin=false;
  isHR=false;
  isfinance=false;
  ismarketing=false;
  issales=false;
  userDisplayName='';
  userDepartment='';

  constructor(private route:Router){
    let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isadmin=true;
    }

    else if(role=='HR'){
      this.isHR=true;
    }

    else if(role=='Finance'){
      this.isfinance=true;
    }

    else if(role=='Marketing'){
      this.ismarketing=true;
    }

    else if(role=='Sales'){
      this.issales=true;
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
