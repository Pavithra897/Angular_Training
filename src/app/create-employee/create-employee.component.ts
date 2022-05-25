import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data)
      this.goToEmployeeList();
    },
    error => console.error());
  }
  goToEmployeeList() {
     this.router.navigate(['/employees']);
   }

  onSubmit(){
    console.log("values---",this.employee);
    this.saveEmployee();
  }
}
