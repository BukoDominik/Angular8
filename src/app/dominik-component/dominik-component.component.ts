import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dominik-component',
  templateUrl: './dominik-component.component.html',
  styleUrls: ['./dominik-component.component.css']
})
export class DominikComponentComponent implements OnInit {

  public hasError = true;
  public successClass = "text-success";
  public isSpecial = true;
  public myId = "testIddd";
  public isDisabled = false;

  /**
  * Object to manage adding multiple classes via ngClass directive
  */
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
