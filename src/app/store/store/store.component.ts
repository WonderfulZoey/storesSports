import { Component, OnInit } from '@angular/core';
import { Product } from "./../../model/product.model";
import { ProductRepository } from "./../../model/product.repository";

declare var module: {
  id: string;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  moduleId:module.id
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
 
  constructor( private repository:ProductRepository) { }

  ngOnInit() {
  }

  getProducts():Product[] {
     return this.repository.getProducts(this.selectedCategory);
  }

  getCategories():string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?:string) {
    this.selectedCategory = newCategory;
  }

}
