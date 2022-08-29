import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdmintimesheetComponent } from './admin/admintimesheet/admintimesheet.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';

import { DashboardComponent } from './trainer/dashboard/dashboard.component';
import { ProfileComponent } from './trainer/profile/profile.component';
import { TimesheetComponent } from './trainer/timesheet/timesheet.component';

import { FinancehomeComponent } from './finance/financehome/financehome.component';
import { FinancenavbarComponent } from './finance/financenavbar/financenavbar.component';





const routes: Routes = [
  { path: '', 
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component : HomeComponent}
  ]},
  {path : 'signup' , component : SignupComponent},
  {path : 'login' , component : LoginComponent},

  {path : 'adminhome' , component : AdminhomeComponent,
  children : 
  [
  {path : 'admintimesheet' , component : AdmintimesheetComponent},
  {path :'adminnavbar' , component : AdminnavbarComponent}
  ]

 },
 { path :'dashboard',component:DashboardComponent,
 children:
 [
  {path:'profile',component:ProfileComponent},
  {path:'timesheet',component:TimesheetComponent}
 ]
},


  {path :'financehome', component:FinancehomeComponent,
  children :
  [
    {path:'financenavbar', component : FinancenavbarComponent}
  ]}


]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
