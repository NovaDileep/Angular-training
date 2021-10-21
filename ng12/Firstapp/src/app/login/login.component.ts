import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  constructor(private router:Router, public service:ServiceService,private fb:FormBuilder, private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Login");
  }
  
loginform=this.fb.group({
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required, Validators.minLength(6)]]
})
validateLogin(){
  
  if(this.loginform.invalid){
    return;
  }
  else{
 this.service.loggedIn=true;
 console.log(this.service.loggedIn);
 this.router.navigate(["dashboard"]); 
  } 
}
/*
reset(){
  this.loginform.reset();
}
*/
}
