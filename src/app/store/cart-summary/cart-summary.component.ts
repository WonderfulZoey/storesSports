import { Component, OnInit } from '@angular/core';
import { Cart } from './../../model/cart.model';

declare var module: {
  id: string;
}

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
  moduleId: module.id
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit() {
  }

}
