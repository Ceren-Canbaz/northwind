import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  
  constructor(private authService:AuthService) { }
  userControl(user:boolean){
    if(this.authService.isAuthenticated()){
      user=true;
    }
    else{
      user=false;
    }
  }
}
