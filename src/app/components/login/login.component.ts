import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms" 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  result:boolean;

  constructor(private formBuilder:FormBuilder, private authService:AuthService,private toastrService:ToastrService,private router:Router){}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["", Validators.required],
      password:["",Validators.required]
    })
   
  }
  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(data=>{
      this.toastrService.info(data.message)
      this.result=true;
      localStorage.setItem("token",data.data.token)
      
      },dataError=>{
        this.toastrService.error(dataError.error)
        this.result=false;
      })
    }
  }
  
}
