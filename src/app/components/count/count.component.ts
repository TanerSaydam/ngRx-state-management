import { Component, OnInit } from '@angular/core';
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
