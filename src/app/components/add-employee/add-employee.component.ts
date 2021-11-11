import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreserviceService } from 'src/app/storeservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form!:FormGroup;
  constructor(private service:StoreserviceService,private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name':new FormControl('',[Validators.required,Validators.nullValidator]),
      'mailid':new FormControl('',[Validators.required,Validators.email]),
      'jobtitle':new FormControl('',[Validators.required,Validators.nullValidator]),
      'phone':new FormControl('',[Validators.required,Validators.minLength(10)]),
      'imageurl':new FormControl('',[Validators.required,Validators.nullValidator])
    });
  }
  gotoemployeelist(){
    this.route.navigate(['/employeelist']);
  }
  onsubmit(){
    this.service.addemployees(this.form.value).subscribe(data => {
      this.gotoemployeelist();
    },error => {
      console.log("error");
    });
    console.log(this.form)
    
  }

}
