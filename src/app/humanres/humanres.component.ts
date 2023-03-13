import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-humanres',
  templateUrl: './humanres.component.html',
  styleUrls: ['./humanres.component.css']
})
export class HumanresComponent  implements OnInit{
 
  userDisplayName='';



  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('username');

    }


    
}


