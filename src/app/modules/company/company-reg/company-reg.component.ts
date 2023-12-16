import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-company-reg',
  templateUrl: './company-reg.component.html',
  styleUrls: ['./company-reg.component.css']
})
export class CompanyRegComponent {

  constructor(private fb:FormBuilder,private compServ:CompanyServiceService){}

  compReg:FormGroup

  ngOnInit(){
    this.compReg=this.fb.group({
      id:[''],
      companyName:[''],
      owner:[''],
      emailId:[''],
      established:[''],
      address:[''],
      technology:[''],
      contact:['']
    })
  }


  saveCompany(){
    console.log('save TS')
    if(this.compReg.value.id==0)
    this.compServ.saveCompanyData(this.compReg.value).subscribe()
    else
    this.compServ.editEmployeeData(this.compReg.value.id,this.compReg.value).subscribe()
  }



}
