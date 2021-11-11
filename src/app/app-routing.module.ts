import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

const routes: Routes = [
{
  path:'employeelist',component:EmployeesListComponent
},
{
  path:'',redirectTo:'/employeelist',pathMatch:'full'
},{
  path:'addemployee',component:AddEmployeeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
