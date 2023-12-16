import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

console.log('Employee module loaded')
@NgModule({
  declarations: [
    EmployeeRegComponent,
    EmployeeDisplayComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  exports:[
    EmployeeRegComponent,
    EmployeeDisplayComponent
  ]
})
export class EmployeeModule { }
