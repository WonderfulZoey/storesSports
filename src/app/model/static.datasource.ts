import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs/index";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
    private products:Product[] = [
        new Product(1,"Product 1","Category 1","Product1(Category 1)",100),
        new Product(2,"Product 2","Category 1","Product2(Category 1)",100),
        new Product(3,"Product 3","Category 1","Product3(Category 1)",100),
        new Product(4,"Product 4","Category 1","Product4(Category 1)",100),
        new Product(5,"Product 5","Category 1","Product5(Category 1)",100),
        new Product(6,"Product 6","Category 2","Product6(Category 2)",100),
        new Product(7,"Product 7","Category 2","Product7(Category 2)",100),
        new Product(8,"Product 8","Category 2","Product8(Category 2)",100),
        new Product(9,"Product 9","Category 2","Product9(Category 2)",100),
        new Product(10,"Product 10","Category 3","Product10(Category 3)",100),
        new Product(11,"Product 11","Category 3","Product11(Category 3)",100),
        new Product(12,"Product 12","Category 3","Product12(Category 3)",100)
    ];

    getProducts():Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order:Order):Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }

}