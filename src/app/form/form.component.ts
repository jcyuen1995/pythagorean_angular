import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  /* 
  leftA = a^2 bottomB = b^2
  result = resuts of pythagorean theorem 
  */

  leftA: number;
  bottomB: number;
  result: number | string = null;
  error: string = "Input cannot be negative or 0";
  show: boolean = true;
  //to checke sign
  sign: Function = Math.sign;
  

  ngOnInit() {
  }

  /* 
  because can't use Math.hypot() and Math.sqrt is probably the most effecient it gets
  adds aproximation sign if hypot is not whole number (to one decimal place) 
  */
  
  handleSubmit() {
    if (this.bottomB <= 0 || this.leftA <= 0) {
      this.show = false;
    } else {
      this.result = Math.sqrt(( this.leftA * this.leftA ) + (this.bottomB * this.bottomB));
      /* if result is a not a whole number */
      if (this.result % 1 != 0 ) {
        this.result = "≈" + (Math.round(this.result*10)/10);
      }
      /* reset the show and error message if user attempts to do again */
      this.show = true;
      /* to show that NaN does not show up but exists in console */
      console.log(this.result);
    }
  }

  /* reset all fields in form*/
  reset() {
    this.leftA = null;
    this.bottomB = null;
    this.result = null;
    this.show = true;
  }
}
