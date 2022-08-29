import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdmintimesheetComponent } from './admin/admintimesheet/admintimesheet.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';




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
    {path :'adminnavbar' , component : AdminnavbarComponent},
    {path : 'admintimesheet' , component : AdmintimesheetComponent},
    {path : 'adminprofile' , component : AdminprofileComponent} 
  ]
}

]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
