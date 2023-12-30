import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent {

  appointmentObj:any={
    name: "",
    mobileNo: "",
    city: "",
    age: "",
    gender: "",
    appointmentDate: "",
    appointmentTime: "",
    isFirstVisit: true,
    naration: ""
  }

  constructor(private http:HttpClient){

  }

  makeAppointment(){
    this.http.post("https://freeapi.miniprojectideas.com/api/HospitalAppointment/AddNewAppointment",this.appointmentObj).subscribe((res:any)=>{
      if(res.result){
        alert("Your Appointment is Done");
      }
      else{
        alert("Error");

      }
    })
  }

}
