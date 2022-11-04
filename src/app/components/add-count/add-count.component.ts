import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css']
})
export class AddCountComponent implements OnInit {
 
  constructor(
    private _count: CountService    
  ) { }

  ngOnInit(): void {
  }

  addCount(){  
    this._count.number += 1;  
  }

}
