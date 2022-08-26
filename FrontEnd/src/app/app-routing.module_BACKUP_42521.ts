import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

<<<<<<< HEAD
const routes: Routes = [
  {path : 'signup' , component : SignupComponent},
  {path : 'login' , component : LoginComponent}
=======

const routes: Routes = [{path : '' , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component : SignupComponent}
>>>>>>> 5354469cf18f1deeccee59dae61de33e0386598b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
