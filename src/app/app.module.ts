import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CountComponent } from './components/count/count.component';
import { AddCountComponent } from './components/add-count/add-count.component';
import { CounterReducer } from './state/counter.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    AddCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({number: CounterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
