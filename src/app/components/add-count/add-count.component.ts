import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountService } from 'src/app/services/count.service';
import { countIncrement } from 'src/app/state/counter.action';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css']
})
export class AddCountComponent implements OnInit {
 
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  addCount(){  
   this.store.dispatch(countIncrement())
  }

}
