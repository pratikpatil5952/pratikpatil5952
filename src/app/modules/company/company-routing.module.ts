import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRegComponent } from './company-reg/company-reg.component';
import { CompanyDisplayComponent } from './company-display/company-display.component';

const routes: Routes = [
  {
    path:'',component:CompanyRegComponent,
    children:[
      {
        path:'company-display',component:CompanyDisplayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
