import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardArray:any[]=[];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getAllDashboardData();
  }

  getAllDashboardData(){
    this.http.get("https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetDashboardData").subscribe((res:any)=>{
      this.dashboardArray=res.data;
    })
  }
}
