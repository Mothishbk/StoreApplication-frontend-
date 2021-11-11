import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StoreEmployee } from 'src/app/store-employee';
import { StoreserviceService } from 'src/app/storeservice.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
storeemployees!:StoreEmployee[];
  constructor(private storeservice:StoreserviceService) {}

  ngOnInit(): void {
    this.getStoreemployees();
  }
  getStoreemployees(){
    this.storeservice.getemployees().subscribe(data => {this.storeemployees=data},error =>{console.log("Error in getemployees")});
  }
  deletestoreemployee(id:number){
    this.storeservice.deleteemployee(id).subscribe(data => {this.getStoreemployees()},error =>{console.log("Error in getemployees")})
  }

}
