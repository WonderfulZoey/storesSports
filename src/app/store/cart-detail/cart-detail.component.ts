import { Component, OnInit } from '@angular/core';
import { Cart } from "./../../model/cart.model";

declare var module: {
  id:string
}

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
  moduleId:module.id
})
export class CartDetailComponent implements OnInit {

  constructor( public cart:Cart ) { }

  ngOnInit() {
  }

}
