import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FinanceComponent } from './finance/finance.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { HumanresComponent } from './humanres/humanres.component';
import { SalesComponent } from './sales/sales.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FinanceGuard } from './guard/finance.guard';
import { HrGuard } from './guard/hr.guard';
import { MarketingGuard } from './guard/marketing.guard';
import { SalesGuard } from './guard/sales.guard';
import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';


const routes: Routes = [
 {path:'', pathMatch: 'full', redirectTo: 'admin'},
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'admin',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},
 {component:FinanceComponent, path:'finance', canActivate:[AuthGuard]},
 {component:HumanresComponent, path:'humanres', canActivate:[AuthGuard]},
 {component:SalesComponent, path:'sales', canActivate:[AuthGuard]},
 {component:MarketingComponent, path:'marketing', canActivate:[AuthGuard]},
 {component:AboutComponent,path:'about',canActivate:[AuthGuard]},
 {component:HelloComponent,path:'hello', canActivate:[AuthGuard]},
 {component:ErrorComponent, path:'**'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
