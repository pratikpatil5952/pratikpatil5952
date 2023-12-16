import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';

const routes: Routes = [
  {
    path:'',component:EmployeeRegComponent,
    children:[{
      path:'emp-display',component:EmployeeDisplayComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
