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
    AdminprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
