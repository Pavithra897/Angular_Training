import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ LoginComponent} from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExpenseGuard } from './expense.guard';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'employees', component: EmployeeListComponent},
  { path: 'createemployee', component: CreateEmployeeComponent},
  { path: 'updateemployee/:id', component: UpdateEmployeeComponent},
  { path: 'employeedetails/:id', component: EmployeeDetailsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
