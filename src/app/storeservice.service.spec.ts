import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { StoreserviceService } from './storeservice.service';
import { HttpClient } from '@angular/common/http';

xdescribe('StoreserviceService', () => {
  let service: StoreserviceService;
  let http: HttpClient;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[StoreserviceService]
    });
    service = TestBed.inject(StoreserviceService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('service defined',() => {
    expect(service).toBeDefined();
  });
  it('service api',() => {
    const req = httpController.expectOne("http://localhost:8080/storeemployee/all");
    expect(req.request.url).toEqual('GET');
    req.flush(true);
  })
});
