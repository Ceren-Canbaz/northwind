import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SaveOrder } from '../models/saveOrder';

@Injectable({
  providedIn: 'root'
})
export class SaveOrderService {

  apiUrl = 'https://localhost:44314/api/';

  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModel<SaveOrder>>{
    let newPath=this.apiUrl+"saveorders/getall"
    return this.httpClient.get<ListResponseModel<SaveOrder>>(newPath);
  }
  delete(order:SaveOrder){
    return this.httpClient.post(this.apiUrl+"saveorders/deleteOrder",order)
  }
}
