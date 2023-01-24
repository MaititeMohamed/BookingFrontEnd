import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Resevation } from "../model/reservation";
import { Room } from "../model/roomModel";



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


     public addRoom(room:Room):Observable<Room> {
      return this.http.post<Room>("http://localhost:8080/Booking/Manager/addRoom",room);
     }

     public updateRoom(room: Room):Observable<Room> {
      return this.http.put<Room>("http://localhost:8080/Booking/Admin/updateRoom",room);
    }

    public deleteRoom(id: number): Observable<any> {
      return this.http.delete<void>("http://localhost:8080/Booking/Admin/deleteRoomById/"+id);
    }
    }

