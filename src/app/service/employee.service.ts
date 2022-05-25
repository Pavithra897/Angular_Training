import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Address } from '../address';

const  baseURL = "http://localhost:8084";

const routes = {
  login:() => `${baseURL}/logindetail`,
  createEmployeURL:() => `${baseURL}/employee`,
  createAddressURL:(id?: number | string) => `${baseURL}/address/${id ? id : ''}`,
  getEmployeURL: (id?: number | string) => `${baseURL}/getEmployee/${id ? id : ''}`,
  getEmployeesURL:() => `${baseURL}/getEmployees`,
  updateEmployeURL: (id?: number | string) => `${baseURL}/updateEmployee/${id ? id : ''}`,
  deleteEmployeURL: (id?: number | string) => `${baseURL}/deleteEmployee/${id ? id : ''}`

}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

    getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(routes.getEmployeesURL());
  }

  createEmployee(employee:Employee):Observable<object>{
    console.log("working")
    return this.httpClient.post(routes.createEmployeURL(),employee);
  }

  createAddress(id: number,address:Address): Observable<object>{
    return this.httpClient.post(routes.createAddressURL(),address);

  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(routes.getEmployeURL(id));
  }

  updateEmployee(id: number,employee:Employee): Observable<any>{
    return this.httpClient.patch(routes.updateEmployeURL(id),employee);
  }

  deleteEmployee(id:number): Observable<Employee>{
    return this.httpClient.delete<Employee>(routes.deleteEmployeURL(id));
  }
}
