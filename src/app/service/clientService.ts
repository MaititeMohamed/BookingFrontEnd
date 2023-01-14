import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from 'src/app/model/clientModel';
import { Observable } from "rxjs";


  @Injectable({
    providedIn: 'root'
  })
  
  export class ClientService{

 
    constructor(private http: HttpClient) { }


    getAllClients(): Observable<any> {
        return this.http.get("http://localhost:8080/Booking/Admin/getAllClient");
      }


     addClient(client:Client):Observable<Client> {
      return this.http.post<Client>("http://localhost:8080/Booking/Admin/addClient",client);
     }

  }