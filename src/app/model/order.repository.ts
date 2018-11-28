import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs/index";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";

@Injectable() 

export class OrderRepository {
    private orders:Order[] = [];

    constructor(private datasource:StaticDataSource){}

    getOrders():Order[] {
        return this.orders;
    }

    saveOrder(order:Order):Observable<Order> {
        return this.datasource.saveOrder(order);
    }
}