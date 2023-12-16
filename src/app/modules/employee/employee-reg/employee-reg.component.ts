import { Component } from '@angular/core';
import { EmpServiceService } from 'src/app/services/emp-service.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
 

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent {

  constructor(private empServ:EmpServiceService,private form:FormBuilder){}


  regForm:FormGroup

  ngOnInit(){
    this.regForm=this.form.group({
      id:[''],
     firstName:[''],
     lastName:[''],
     designation:[''],
     emailId:[''],
    address:[],
    mobile:[''],
     pincode:[''],
    companyName:['']
    })
  }
  saveEmployee(employee){
    if(this.regForm.value.id==0){
    this.empServ.saveEmployeeData(this.regForm.value).subscribe()
  }
    else{
    this.empServ.editEmployee(employee.value.id,employee.value).subscribe()
    }
  }
  








  get firstName(){
    return this.regForm.get('firstName')
  }



}
