import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  myInputMessage:string ="I am the parent comppnent"  
 

  Weekdays:Array<String> =[
    'Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday']


  constructor() { }

  ngOnInit() {
    
  }
  GetChildData(data: any){  
    console.log(data);  
 }  
 
}
