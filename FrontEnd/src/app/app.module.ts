import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard } from './auth.guard';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { AuthService } from './auth.service';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 5354469cf18f1deeccee59dae61de33e0386598b


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent
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
