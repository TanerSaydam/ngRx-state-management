import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  number$: Observable<number>;
  constructor(
    private store: Store<{number: number}>
  ) {  
    this.number$ = this.store.select("number");

  }

  ngOnInit(): void {
  }

}
