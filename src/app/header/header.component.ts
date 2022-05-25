import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() myinputMsg:string;  
  @Output() myOutput:EventEmitter<string>= new EventEmitter();  
  outputMessage:string="I am child component."  

  constructor() { }

  ngOnInit(): void {
    console.log(this.myinputMsg)
    this.myOutput.emit(this.outputMessage);  

  }

}
