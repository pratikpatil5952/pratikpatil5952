import { Component } from '@angular/core';
import { CompanyRegComponent } from '../company-reg/company-reg.component';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'app-company-display',
  templateUrl: './company-display.component.html',
  styleUrls: ['./company-display.component.css']
})
export class CompanyDisplayComponent {

  constructor(private comp:CompanyRegComponent,private serv:CompanyServiceService){}

  companyList:Company[]=[]

  getCompanyData(){
    this.serv.getCompanyDetails().subscribe((data:Company[])=>{
    this.companyList=data
    })
  }
 

  editEmployee(val){
    this.comp.compReg.patchValue({
      id:val.id,
      companyName:val.companyName,
      owner:val.owner,
      established:val.established,
      emailId :val.emailId,
      address:val.address,
      technology:val.technology,
      contact:val.contact
    })
  }

  deleteCompany(id:number){
this.serv.deleteCompanyDetails(id).subscribe()
  }


}
