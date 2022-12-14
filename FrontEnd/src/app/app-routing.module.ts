import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdmintimesheetComponent } from './admin/admintimesheet/admintimesheet.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';

import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { DashboardComponent } from './trainer/dashboard/dashboard.component';
import { ProfileComponent } from './trainer/profile/profile.component';
import { TimesheetComponent } from './trainer/timesheet/timesheet.component';

import { FinancehomeComponent } from './finance/financehome/financehome.component';
import { FinancenavbarComponent } from './finance/financenavbar/financenavbar.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { FinanceupdateComponent } from './finance/financeupdate/financeupdate.component';
import { FinancedashboardComponent } from './finance/financedashboard/financedashboard.component';
import { TrainerupdateComponent } from './trainer/trainerupdate/trainerupdate.component';
import { TrainernavbarComponent } from './trainer/trainernavbar/trainernavbar.component';
import { TrainerhomeComponent } from './trainer/trainerhome/trainerhome.component';
import { PaypackageComponent } from './admin/paypackage/paypackage.component';
import { ViewtimesheetComponent } from './admin/viewtimesheet/viewtimesheet.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { AdmintrainerlistComponent } from './admin/admintrainerlist/admintrainerlist.component';
import { PaymentTimesheetComponent } from './payment-timesheet/payment-timesheet.component';
import { FinancetimesheetComponent } from './finance/financetimesheet/financetimesheet.component';






const routes: Routes = [
  { path: '', 
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component : HomeComponent}
  ]},
  
  {path : 'signup' , component : SignupComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'updateprofile' , component : UpdateProfileComponent},
  {path :'paysheet', component:PaymentTimesheetComponent},

  {path : 'adminhome' ,   component : AdminhomeComponent,
  children : 
  [
    {path : 'admintimesheet' , component : AdmintimesheetComponent},
    {path :'adminnavbar' , component : AdminnavbarComponent},
    {path : 'admintrainerlist', component:AdmintrainerlistComponent},
    {path : 'adminprofile' , component : AdminprofileComponent},
    {path: 'adminupdate' , component : AdminUpdateComponent},
    {path : 'admindashboard' , component : AdmindashboardComponent},
    {path : 'paypackage' , component : PaypackageComponent},
    {path : 'viewtimesheet' , component:ViewtimesheetComponent},
    {path : 'payment' , component:PaymentComponent},
  ]

 },
 { path :'trainerhome',component:TrainerhomeComponent,
 children:
 [
  {path:'profile',component:ProfileComponent},
  {path:'timesheet',component:TimesheetComponent},
  {path : 'trainerupdate', component : TrainerupdateComponent},
  {path : 'trainernavbar',component : TrainernavbarComponent},
  {path : 'dashboard' , component : DashboardComponent }
 ]
},


  {path :'financehome', component:FinancehomeComponent,
  children :
  [
    {path:'financenavbar', component : FinancenavbarComponent},
    {path : 'financeupdate', component : FinanceupdateComponent},
    {path : 'financedashboard', component : FinancedashboardComponent},
    {path : 'financetimesheet' , component : FinancetimesheetComponent}
  ]}


]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
