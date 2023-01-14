
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


  @Injectable({
    providedIn: 'root'
  })
  
  export class ManagerService{

 
    constructor(private http: HttpClient) { }


    getAllMangers(): Observable<any> {
        return this.http.get("http://localhost:8080/Booking/Admin/getAllManger");
      }


  }