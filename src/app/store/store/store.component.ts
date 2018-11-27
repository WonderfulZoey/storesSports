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
  public productsPerpage = 4;//每页显示4个
  public selectedPage = 1;//选中第一页
 
  constructor( private repository:ProductRepository) { }

  ngOnInit() {
  }

  getProducts():Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerpage;
     return this.repository.getProducts(this.selectedCategory).slice(pageIndex,pageIndex + this.productsPerpage);
  }

  getCategories():string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?:string) {
    this.selectedCategory = newCategory;
  }
  
  //选中第几页
  changePage(newPage:number) {
    this.selectedPage = newPage;
  }

  //改变每页显示个数
  changePageSize(newSize:number) {
    this.productsPerpage = Number(newSize);
    this.changePage(1);
  }

  getPageNumbers():number[] {
    return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerpage))
    .fill(0).map((x,i) => i+1);
  }

}
