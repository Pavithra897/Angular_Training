import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private route: ActivatedRoute,private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees=data;
      console.log(this.employees)
    });
   }
  employeeDetails(id:number){
    this.router.navigate(['employeedetails',id]);
  }
  employeeAddress(id:number){
    this.router.navigate(['employeeaddress',id],{relativeTo:this.route});
  }
  updateEmployee(id:number){
    this.router.navigate(['updateemployee',id]);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data)
      this.getEmployees();
    })
  }
}
