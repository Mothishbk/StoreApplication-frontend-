import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { StoreserviceService } from 'src/app/storeservice.service';

import { EmployeesListComponent } from './employees-list.component';

fdescribe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ EmployeesListComponent ],
      providers:[StoreserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get all employee from getstoreemployee', () =>{
    const service = fixture.debugElement.injector.get(StoreserviceService);
    spyOn(service,'getemployees').and.returnValue(of([{name:"mahesh",mailid:"mahesh@ymail.com",id:20,phone:"9853147358",jobtitle:"tester",imageurl:"value.value"}]));
    component.getStoreemployees();
    expect(component.storeemployees).toEqual([{name:"mahesh",mailid:"mahesh@ymail.com",id:20,phone:"9853147358",jobtitle:"tester",imageurl:"value.value"}]);
  });
});
