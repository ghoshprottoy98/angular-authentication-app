import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

export class ErrorComponent{
  isadmin=false;
  isHR=false;
  isfinance=false;
  ismarketing=false;
  issales=false;

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

}
