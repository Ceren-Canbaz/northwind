import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44314/api/';

  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  add(product:Product){
    return this.httpClient.post(this.apiUrl+"products/add",product)
  }
  getProduct(productId:number):Observable<Product>{
   let newPath=this.apiUrl+"products/getbyid?id="+productId
     return this.httpClient.get<Product>(newPath)
   }
   addAdmin(product:Product){
    return this.httpClient.post(this.apiUrl+"products/update",product)
   }
   deleteAdmin(product:Product){
    return this.httpClient.post(this.apiUrl+"products/delete",product)
   }
   getProductsForAdmin():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getalladmin"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
