import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';




const routes: Routes = [
  { path: '', 
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component : HomeComponent}
  ]},
  {path : 'signup' , component : SignupComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'adminhome' , component : AdminhomeComponent}

]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
