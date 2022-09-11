import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard } from './auth.guard';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdmintimesheetComponent } from './admin/admintimesheet/admintimesheet.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { TimesheetComponent } from './trainer/timesheet/timesheet.component';
import { ProfileComponent } from './trainer/profile/profile.component';
import { DashboardComponent } from './trainer/dashboard/dashboard.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { FinancehomeComponent } from './finance/financehome/financehome.component';
import { FinancenavbarComponent } from './finance/financenavbar/financenavbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TrainernavbarComponent } from './trainer/trainernavbar/trainernavbar.component';
import { DialogComponent } from './trainer/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';



import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { FinanceupdateComponent } from './finance/financeupdate/financeupdate.component';
import { TrainerupdateComponent } from './trainer/trainerupdate/trainerupdate.component';
import { FinancedashboardComponent } from './finance/financedashboard/financedashboard.component';
import { AdmintrainerlistComponent } from './admin/admintrainerlist/admintrainerlist.component';
import { TrainerhomeComponent } from './trainer/trainerhome/trainerhome.component';
import { PaypackageComponent } from './admin/paypackage/paypackage.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { ViewtimesheetComponent } from './admin/viewtimesheet/viewtimesheet.component';
import { FinancetimesheetComponent } from './finance/financetimesheet/financetimesheet.component';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminhomeComponent,
    AdmintimesheetComponent,
    AdminnavbarComponent,

    TimesheetComponent,
    ProfileComponent,
    DashboardComponent,

    FinancehomeComponent,
    FinancenavbarComponent
    
,
    AdminprofileComponent,
    NavbarComponent,
    FooterComponent,
    TrainernavbarComponent,
    DialogComponent,
    UpdateProfileComponent,
    AdminUpdateComponent,
    AdmindashboardComponent,
    FinanceupdateComponent,
    TrainerupdateComponent,
    FinancedashboardComponent,
    AdmintrainerlistComponent,
    TrainerhomeComponent,
    PaypackageComponent,
    PaymentComponent,
    ViewtimesheetComponent,
    FinancetimesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
   
    
    
    
  ],
  providers: [AuthGuard, AuthService,DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
