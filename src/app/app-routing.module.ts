import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeeRegComponent } from './modules/employee/employee-reg/employee-reg.component';
import { CompanyRegComponent } from './modules/company/company-reg/company-reg.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
  path:'',component:LoginComponent
  },
  {
  path: 'dashboard', component: DashboardComponent,
    children:[
      {
        path: 'about', component: AboutUsComponent
      },
      {
        path: 'contact', component: ContactUsComponent
      },
      {
        path: 'company',
        loadChildren: () => import('./modules/company/company.module').then(m => m.CompanyModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
      }
    ]
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
