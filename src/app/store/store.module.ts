import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ModelModule } from "./../model/model.module"
import { StoreComponent } from "./store/store.component";
import { CounterDirective } from "./store/counter.directive";
import { CartSummaryComponent } from './cart-summary/cart-summary.component'

@NgModule({
    declarations:[
      StoreComponent,
      CounterDirective,
      CartSummaryComponent
    ],
    imports:[
        ModelModule,
        BrowserModule,
        FormsModule
    ],
    exports:[
        StoreComponent
    ]
}) 

export class StoreModule {

}