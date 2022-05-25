import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): Employee {
    this.id = this.route.snapshot.params['id'];
    this.employeService.getEmployeeById(this.id).subscribe(data => {
      console.log("data -->",data)
       this.employee = data;

    })
    return this.employee;
  }
}
