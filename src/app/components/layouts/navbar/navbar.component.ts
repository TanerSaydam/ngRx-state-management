import { BasketModel } from './../../../models/basket.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  basketCount$ = 0;
  baskets$: BasketModel[] = []
  constructor(
    private store: Store<{"baskets": BasketModel[]}>
  ) {
    this.store.select("baskets").subscribe(res=> {
      this.basketCount$ = res.length;
      this.baskets$ = res;
    })
  }

  ngOnInit(): void {
  } 
}
