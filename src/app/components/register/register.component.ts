import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm:FormGroup;
  result:boolean;
  
  constructor(private  formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      company:["",Validators.required],
    })
  }
  register(){
    if(this.registerForm.valid){
      let registerModel=Object.assign({},this.registerForm.value)
      this.authService.register(registerModel).subscribe(data=>{
        this.toastrService.info("Kayıt Başarılı, Giriş işleminiz gerçekleşti.")
        this.result=true;
        localStorage.setItem("token",data.data.token);
      },dataError=>{
        this.toastrService.error("Kayıt Başarısız"),
        this.result=false
      })
    }
  }
  


}
