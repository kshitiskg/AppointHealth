import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientComponent } from './components/patient/patient.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './layout/login/login.component';
import { AppoinmentListComponent } from './components/appoinment-list/appoinment-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MakeAppointmentComponent,
    DashboardComponent,
    PatientComponent,
    HomeComponent,
    LoginComponent,
    AppoinmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
