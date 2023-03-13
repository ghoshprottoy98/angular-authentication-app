import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router) {
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
        if (this.result.password === this.loginform.value.password  && this.result.department === this.loginform.value.department) 
        {
          if (this.result.isactive) {
            sessionStorage.setItem('username',this.result.id);
            sessionStorage.setItem('role',this.result.role);
            sessionStorage.setItem('department',this.result.department);

            if (this.result.department === 'IT')
            {this.router.navigate(['']);}

            if (this.result.department === 'HR')
            {this.router.navigate(['/humanres']);}

            if (this.result.department === 'Finance')
            {this.router.navigate(['/finance']);}

            if (this.result.department === 'Marketing')
            {this.router.navigate(['/marketing']);}

            if (this.result.department === 'Sales')
            {this.router.navigate(['/sales']);}

          } 
          
          else {
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