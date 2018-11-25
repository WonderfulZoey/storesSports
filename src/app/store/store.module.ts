import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ModelModule } from "./../model/model.module"
import { StoreComponent } from "./store/store.component";

@NgModule({
    declarations:[
      StoreComponent
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