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


const routes: Routes = [
 {path:'', pathMatch: 'full', redirectTo: 'admin'},
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'admin',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},
 {component:FinanceComponent, path:'finance', canActivate:[FinanceGuard]},
 {component:HumanresComponent, path:'humanres', canActivate:[HrGuard]},
 {component:SalesComponent, path:'sales', canActivate:[SalesGuard]},
 {component:MarketingComponent, path:'marketing', canActivate:[MarketingGuard]},
 {component:ErrorComponent, path:'**'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
