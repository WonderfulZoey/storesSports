import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModelModule } from "./model/model.module";
import { StoreModule } from "./store/store.module";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store/store.component';
import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
import { CheckOutComponent } from "./store/check-out/check-out.component";
import { StoreFirstGuard } from "./storeFirst.guard";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    StoreModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path: "store" , component: StoreComponent , canActivate: [StoreFirstGuard]},
      {path: "cart" , component: CartDetailComponent , canActivate: [StoreFirstGuard]},
      {path: "checkout" , component: CheckOutComponent , canActivate: [StoreFirstGuard]},
      {path: "**" , redirectTo: "/store"}
    ])

  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
