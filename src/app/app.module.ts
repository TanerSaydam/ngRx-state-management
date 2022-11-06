import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BasketsReducer } from './state/baskets/baskets.reducer';
import { Reducers } from './state/reducers';
import { ProductAddComponent } from './components/home/product-add/product-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    HomeComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(Reducers.baskets)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
