import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products:Product[]=[];
  dataLoaded=false;
  filterText="";

   constructor(private productService:ProductService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,private route:Router) {}

  ngOnInit(): void {
      this.getProducts()
  }

  getProducts() {
    this.productService.getProductsForAdmin().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })   
  }


  add(product:Product){
    this.productService.addAdmin(product).subscribe(data=>{
      this.toastrService.success("Ürün Silindi");
      this.route.navigate(["products"]);
      this.route.navigate(["productsadmin"]);
    });
      
        // this.toastrService.success("Sepete eklendi",product.productName)
        // this.cartService.addToCart(product);
     
   
  }

}
