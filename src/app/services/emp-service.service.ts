import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http:HttpClient) { }

url= "http://localhost:3000/employee/";


  saveEmployeeData(employee):Observable<Employee>{
   return this.http.post<Employee>(this.url,employee)
  }

  getEmployeeDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url)
  }
  
  editEmployee(id,employee):Observable<Employee>{
    return this.http.put<Employee>(this.url+id,employee)
  }

  deleteEmployeeData(id):Observable<Employee>{
    return this.http.delete<Employee>(this.url+id)
  }

}
