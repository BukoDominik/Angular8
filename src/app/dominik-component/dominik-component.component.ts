import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dominik-component',
  templateUrl: './dominik-component.component.html',
  styleUrls: ['./dominik-component.component.css']
})
export class DominikComponentComponent implements OnInit {

  public ngIfVisable = true;
  public hasError = true;
  public successClass = "text-success";
  public isSpecial = true;
  public myId = "testIddd";
  public isDisabled = false;
  public highlightColor = "orange";
  public name = "";
  public switchColor = "red";
  public date = new Date();
  public titleStyles = {
  color: "blue",
  fontStyle: "italic"
  }
  public greeting = "";
  public NgForColors = ["red", "blue", "green", "yellow"];
  /**
  * Object to manage adding multiple classes via ngClass directive
  */
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  /**
  * One of two for parentData binding : bind property like in app.component.html
  */
  @Input('parentData') public parentName;
  @Input() public parentData;

  constructor() { }
  /**
  * Create child Event with @Output() and bind data in parent component app.component.html in this example
  */
  @Output() public childEvent = new EventEmitter();
  fireEvent(){
  this.childEvent.emit('Sending to parent');
  }
  ngOnInit() {
  }

  onClick($event){
    console.log(event)
    this.greeting = "Welcome Home!"
  }
  logMessage(value){
  console.log(value)
  }


}
