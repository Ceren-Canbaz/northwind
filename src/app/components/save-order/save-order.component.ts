import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SaveOrder } from 'src/app/models/saveOrder';
import { SaveOrderService } from 'src/app/services/save-order.service';

@Component({
  selector: 'app-save-order',
  templateUrl: './save-order.component.html',
 
})
export class SaveOrderComponent implements OnInit{
  saves:SaveOrder[]=[];
  dataLoaded=false;

  constructor(private saveOrderService:SaveOrderService,
      private activatedRote:ActivatedRoute,
      private toastrService:ToastrService,
             ){}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.saveOrderService.getProducts().subscribe(response=>{
      this.saves=response.data,
      this.dataLoaded=true;
    })
  }
  deleteOrder(order:SaveOrder){
    this.saveOrderService.delete(order).subscribe(data=>{
      this.toastrService.error("Sipariş İptal Edildi");
    });
  }
}
