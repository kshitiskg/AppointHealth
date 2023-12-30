import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientList:boolean = false;

  patientObj:any= {
    patientId: 0,
    name: "",
    mobileNo: "",
    city: "",
    age: "",
    gender: ""
  }

  patientArray:any[]=[];

  constructor(private http:HttpClient){}


ngOnInit(): void {
  this.getALlPatient();
}
  getALlPatient(){
    this.http.get("https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetAllPatients").subscribe((res:any)=>{
      this.patientArray=res.data;
    })
  }

  patientRegister(){
   this.http.post("https://freeapi.miniprojectideas.com/api/HospitalAppointment/AddNewPatient",this.patientObj).subscribe((res:any)=>{
    if(res.result){
      alert("Register Successfull...")
    }else{
      alert("Error... Try again later")
    }
   })
  }

  edit(id:number){
    this.patientList=false;
    this.http.get("https://freeapi.miniprojectideas.com/api/HospitalAppointment/GetPatientByPatientId?patientId="+id).subscribe((res:any)=>{
      this.patientObj=res.data;
    })
  }
  UpdatePatient(){
    this.http.put("https://freeapi.miniprojectideas.com/api/HospitalAppointment/UpdatePatient",this.patientObj).subscribe((res:any)=>{
      if(res.result){
        alert("Updated");
        this.getALlPatient();
        this.patientList=true;
      }else{
        alert("Error")
      }
    })
  }

  deletePatient(id:number){
    this.http.delete("https://freeapi.miniprojectideas.com/api/HospitalAppointment/DeletePatientByPatienId?patientId="+id).subscribe((res:any)=>{
      if(res.result){
        alert("Deleted Patient");
      }else{
        alert("Error")
      }
    })
  }
}
