import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { OrderRepository } from "./order.repository";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

@NgModule({
    providers:[ProductRepository,StaticDataSource,Cart,OrderRepository,Order]
})

export class ModelModule {}