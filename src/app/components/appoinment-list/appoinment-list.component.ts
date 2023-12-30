import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {

  appoinmentArray:any[]=[];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getAllAppoinment();
  }

  getAllAppoinment(){
    this.http.get("https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetAllAppointments").subscribe((res:any)=>{
      this.appoinmentArray=res.data;
    })
  }

  todayAppoinment(){
    this.http.get("https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetTodaysAppointments").subscribe((res:any)=>{
      this.appoinmentArray=res.data;
    })
  }

  markdoneAppoinment(id:Number){
    this.http.get("https://freeapi.miniprojectideas.com/api/HospitalAppointment/MarkAppointmentDone?appointmentId="+id).subscribe((res:any)=>{
  this.todayAppoinment();
  this.getAllAppoinment();
    })
  }
}
