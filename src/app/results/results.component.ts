import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  /* grab the result value from form */
  @Input() result: string | number;
  @Input() show: boolean;

  /* greater function to return true or false for ngIf to change the class and make result smaller  -- todo */
  greaterThan() {
    if (this.result >= 10) {
      return true;
    } else {
      return false;
    }
  }
  

}
