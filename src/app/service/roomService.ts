import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Resevation } from "../model/reservation";



 @Injectable({
    providedIn: 'root'
  })
   
export class RoomService{

    constructor(private http: HttpClient) { }

      public getRoomsByHotleId(id:number): Observable<any>{
        return this.http.get("http://localhost:8080/Booking/Admin/getRoomsByHotelId/"+id)

      }

      public  getAllRooms(): Observable<any> {
        return this.http.get("http://localhost:8080/Booking/Admin/getAllRoms");
      }
      
    public getRoomById(id:number):Observable<any>{
      return this.http.get("http://localhost:8080/Booking/Admin/getRoomById/"+id);
    }


    public reservation(reservation:Resevation):Observable<Resevation> {
      return this.http.post<Resevation>("http://localhost:8080/Booking/Client/clientReservation",reservation);
     }


     
    }

