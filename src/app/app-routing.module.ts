import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientComponent } from './components/patient/patient.component';
import { HomeComponent } from './components/home/home.component';
import { AppoinmentListComponent } from './components/appoinment-list/appoinment-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'',
    component:NavbarComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'appointment',
        component:MakeAppointmentComponent
      },
      {
        path:'patient',
        component:PatientComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'appoinment',
        component:AppoinmentListComponent
      },
     
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
