import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router, private route:ActivatedRoute) {
      sessionStorage.clear();

  }
  result: any;
  username: any;
  password: any;
  

  loginform = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    department: this.builder.control('', Validators.required)
  });

  proceedLogin() {
    if (this.loginform.valid) {
      this.service.getUserByCode(this.loginform.value.id).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginform.value.password && this.result.department === this.loginform.value.department) {
          if (this.result.isactive) {
            sessionStorage.setItem('username', this.result.id);
            sessionStorage.setItem('role', this.result.role);
            sessionStorage.setItem('department', this.result.department);
            
            // Get the URL segments after 'admin' or 'login'
            const segments = this.route.snapshot.url.slice(2).map(segment => segment.path);
            let returnUrl: string;
  
            // Check if the user belongs to any of the allowed departments
            if (['IT', 'HR', 'Finance', 'Marketing', 'Sales'].includes(this.result.department)) {
              if (this.result.department === 'IT') {
                returnUrl = '/';
              } else if (this.result.department === 'HR') {
                returnUrl = '/humanres';
              } else if (this.result.department === 'Finance') {
                if (window.location.pathname.includes('/finance/about')) {
                  returnUrl = '/finance/about';
                } else {
                  returnUrl = '/finance';
                }
              } else if (this.result.department === 'Marketing') {
                returnUrl = '/marketing';
              } else if (this.result.department === 'Sales') {
                returnUrl = '/sales';
              }
  
              // If there are URL segments after the department route, add them to the return URL
              if (segments.length > 0) {
                returnUrl += `/${segments.join('/')}`;
              }
  
              this.router.navigateByUrl(returnUrl);
            } else {
              this.toastr.error('Unauthorized access', 'Error');
            }
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
  
}  