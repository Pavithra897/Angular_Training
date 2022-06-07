import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address:Address=new Address();
  id: number;

  constructor(private employeeService:EmployeeService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  saveAddress(){
    this.id = this.route.snapshot.params['id'];
    this.employeeService.createAddress(this.id,this.address).subscribe((data: any)=>{
      this.address = data;
      this.router.navigate(['/employees']);

    },
      (error: any) => console.error());
  }

  onSubmit(){
    this.saveAddress();
  }
}
