import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyRegComponent } from './company-reg/company-reg.component';
import { CompanyDisplayComponent } from './company-display/company-display.component';
import { ReactiveFormsModule } from '@angular/forms';

console.log('Company Module loaded')
@NgModule({
  declarations: [
    CompanyRegComponent,
    CompanyDisplayComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  exports:[
    CompanyRegComponent,
    CompanyDisplayComponent
  ]
})
export class CompanyModule { }
