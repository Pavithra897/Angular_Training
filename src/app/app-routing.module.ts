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
import { HeaderComponent } from './header/header.component';
import { AddressComponent } from './address/address.component';
import { CustompipeComponent } from './custompipe/custompipe.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'employees', component: EmployeeListComponent,
  children: [
    { path: 'employeeaddress/:id', component: AddressComponent},
  ]
},
  { path: 'createemployee', component: CreateEmployeeComponent, },
  { path: 'updateemployee/:id', component: UpdateEmployeeComponent},
  { path: 'employeedetails/:id', component: EmployeeDetailsComponent},
  { path: 'custompipe', component: CustompipeComponent},
  {  
    path: 'lazy-loading',  
    loadChildren: () => import('./lazy-loading/lazy-loading.module')  
    .then(m => m.LazyLoadingModule)  
 },  
  { path: '', redirectTo: 'employees', pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
