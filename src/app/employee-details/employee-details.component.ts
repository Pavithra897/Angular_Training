import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  id: number;
  employee: Employee;
  isBold: boolean = true;  
  fontSize: number = 30;  
  isItalic: boolean = true;  
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }
  languages = ['Java','PHP', '.Net','JQuery', 'JavaScript','Angular','AngularJS']

  
  ngOnInit(): Employee {
    this.id = this.route.snapshot.params['id'];
    this.employeService.getEmployeeById(this.id).subscribe(data => {
      console.log("data -->",data)
       this.employee = data;

    })
    return this.employee;
  }
  currentStyles: {};
setCurrentStyles() {
  // CSS styles: set per current state of component properties
  let currentStyles = {
    'font-weight': this.isBold ? 'bold' : 'normal',  
    'font-style': this.isItalic ? 'italic' : 'normal',  
    'font-size.px': this.fontSize  
};
return currentStyles;  
}
}
