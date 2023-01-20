import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  isAnyUserHere=false;
 
  constructor(private authService:AuthService,private toastrService:ToastrService,private route:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {

    this.UserControl();
    
  }

  UserControl(){
    if(this.authService.isAuthenticated()){
      this.isAnyUserHere=true;
    }
    else{
      this.isAnyUserHere=false;
    }
  }
  LogOut(){
    if(this.authService.isAuthenticated()){
      localStorage.setItem("token","")
      this.toastrService.info("Çıkış Yaptınız");
      
    this.reloadPage();
        
    
    }
     
    
  }
  reloadPage(){
    this.route.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.route.onSameUrlNavigation='reload';
    this.route.navigate(["login"]);
  }
 
 

}
