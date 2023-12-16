import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmpServiceService } from 'src/app/services/emp-service.service';
import { EmployeeRegComponent } from '../employee-reg/employee-reg.component';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent {

  test:FormGroup
 

  empList:Employee[]=[]

  constructor(public serv:EmpServiceService,private emp:EmployeeRegComponent){
  }
 
  getEmployee(){
    this.serv.getEmployeeDetails().subscribe((data:Employee[])=>{
      console.log(data)
      this.empList=data
    })
  }
    editEmployee(employee){
      this.emp.regForm.patchValue({
        id:employee.id,
        firstName:employee.firstName,
        lastName:employee.lastName,
        designation:employee.designation,
        emailId:employee.emailId,
       address:employee.address,
       mobile:employee.mobile,
        pincode:employee.pincode,
       companyName:employee.companyName
      });
    }

    deleteEmployee(id:number){
      this.serv.deleteEmployeeData(id).subscribe()
    }
  }

