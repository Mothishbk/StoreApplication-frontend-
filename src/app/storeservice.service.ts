import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreEmployee } from './store-employee';
@Injectable({
  providedIn: 'root'
})
export class StoreserviceService {

  constructor(private httpclient:HttpClient) { }
  getemployees():Observable<StoreEmployee[]>{
    return this.httpclient.get<StoreEmployee[]>("http://localhost:8080/storeemployee/all");
  }
  addemployees(employee:StoreEmployee):Observable<StoreEmployee>{
    return this.httpclient.post<StoreEmployee>("http://localhost:8080/storeemployee/add",employee);
  }
  updateemployees(employee:StoreEmployee):Observable<StoreEmployee>{
    return this.httpclient.put<StoreEmployee>("http://localhost:8080/storeemployee/update",employee);
  }
  deleteemployee(id:number):Observable<object>{
    return this.httpclient.delete(`http://localhost:8080/storeemployee/delete/${id}`)
  }

}
