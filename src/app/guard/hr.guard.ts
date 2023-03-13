import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class HrGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router,private tostr:ToastrService) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.service.isLoggedIn()) {
        if(this.service.getRole() == 'HR')
        { 
          return true;
        
        }
  
        else
        {
          return this.router.navigate(['/error']);
        }
      }
     
      return this.router.navigate(['/error']);
  
    }
}