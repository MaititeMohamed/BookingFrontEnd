
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Manager } from "../model/manager";


  @Injectable({
    providedIn: 'root'
  })
  
  export class ManagerService{

 
    constructor(private http: HttpClient) { }


      public getAllMangers(): Observable<any> {
        return this.http.get("http://localhost:8080/Booking/Admin/getAllManger");
      }

      public  addManager(manager:Manager):Observable<Manager> {
        return this.http.post<Manager>("http://localhost:8080/Booking/Admin/addManger",manager);
       }
  
       public updateManager(manager: Manager):Observable<Manager> {
        return this.http.put<Manager>("http://localhost:8080/Booking/Admin/updateManager",manager);
      }
    
  
       public deleteManager(id: number): Observable<any> {
        return this.http.delete<void>("http://localhost:8080/Booking/Admin/deleteManagerById/"+id);
      }

  }