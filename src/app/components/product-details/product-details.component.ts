import { Component, OnInit, getModuleFactory } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Product;
  dataLoaded = false;
  safeUrl:any;

  constructor(private productService:ProductService , private activatedRoute:ActivatedRoute,private _sanitizer:DomSanitizer){}

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
 
}
