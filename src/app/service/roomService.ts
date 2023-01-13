import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



 @Injectable({
    providedIn: 'root'
  })
   
export class RoomService{

    constructor(private http: HttpClient) { }

    getRoomsByHotleId(id:number): Observable<any>{
        return this.http.get("http://localhost:8080/Booking/Admin/getRoomsByHotelId/"+id)
       }
}
