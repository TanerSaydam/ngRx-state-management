import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { count, Observable } from 'rxjs';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor(
    public _count: CountService
  ) {     
  }

  ngOnInit(): void {
  }

}
