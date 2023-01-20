import { Component, OnInit, getModuleFactory } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details-admin',
  templateUrl: './product-details-admin.component.html',
  styleUrls: ['./product-details-admin.component.css']
})
export class ProductDetailsAdminComponent implements OnInit{
  products: Product;
  dataLoaded = false;
  safeUrl:any;

  constructor(private productService:ProductService , private activatedRoute:ActivatedRoute,private _sanitizer:DomSanitizer,private toastrService:ToastrService,private route:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["productId"]){
        this.getProduct(params["productId"])
      }else{
        console.log("else");
      }
    })
    
  }

  
 getProduct(productId:number){
  this.productService.getProduct(productId).subscribe(response=>{
    this.products=response;
    this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl(''+this.products.image);
    this.dataLoaded = true;
   
 });
}
add(){
  this.productService.addAdmin(this.products).subscribe(data=>{
    this.toastrService.success("Ürün Eklendi");
    this.route.navigate(["products/Admin"]);
  });
 }
 deleteProduct(){
  this.productService.deleteAdmin(this.products).subscribe(data=>{
    this.toastrService.error("Ürün Reddedildi");
    this.route.navigate(["products/Admin"]);
  });
 }
}
