import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/company/"

  saveCompanyData(company):Observable<Company> {
    console.log('service Method')
    return this.http.post<Company>(this.url,company)
  }

  getCompanyDetails():Observable<Company[]>{
    return this.http.get<Company[]>(this.url)
  }

  editEmployeeData(id,comp):Observable<Company>{
return this.http.put<Company>(this.url+id,comp)
  }

  deleteCompanyDetails(id):Observable<Company>{
    return this.http.delete<Company>(this.url+id)
  }

}
