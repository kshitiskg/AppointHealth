import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loginObj:any={
    username:'',
    password:'',
    role:''
  }

  constructor(){
    
  }
  login(){
     if(this.loginObj.username == 'appointHealth' && this.loginObj.password == '1234' && this.loginObj.role == 'doctor' || this.loginObj.username == 'kshitija' && this.loginObj.password == '1111' && this.loginObj.role == 'patient'){
      localStorage.setItem("loginDetails",this.loginObj);
     }
  }
}
