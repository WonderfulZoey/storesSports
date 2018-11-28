import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from "./../../model/order.model";
import { OrderRepository } from "../../model/order.repository";

declare var module:{
  id:string
}

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  public orderSent:boolean = false;
  public submitted:boolean = false;

  constructor(public repository:OrderRepository,
              public order:Order) { }

  ngOnInit() {
  }

  submitOrder(form:NgForm){
     this.submitted = true;
     if(form.valid){
       this.repository.saveOrder(this.order).subscribe(order => {
         this.order.clear();
         this.orderSent = true;
         this.submitted = false;
       })
     }
  }

}
