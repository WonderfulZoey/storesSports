import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ModelModule } from "./../model/model.module";
import { RouterModule } from "@angular/router"
import { StoreComponent } from "./store/store.component";
import { CounterDirective } from "./store/counter.directive";
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckOutComponent } from './check-out/check-out.component'

@NgModule({
    declarations:[
      StoreComponent,
      CounterDirective,
      CartSummaryComponent,
      CartDetailComponent,
      CheckOutComponent
    ],
    imports:[
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    exports:[
        StoreComponent,
        CartDetailComponent,
        CheckOutComponent
    ]
}) 

export class StoreModule {

}