import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../model/hotelModel';

  @Injectable({
    providedIn: 'root'
  })
  
  export class HotelService{
 
    constructor(private http: HttpClient) { }

    getAllHotels(): Observable<any> {
        return this.http.get("http://localhost:8081/Booking/Admin/getAllHotels");
      }


      getHotelById(id:number): Observable<any>{
       return this.http.get("http://localhost:8081/Booking/Admin/getHotelById/"+id)
      }

      public addHotel(hotel:Hotel):Observable<Hotel> {
        return this.http.post<Hotel>("http://localhost:8081/Booking/Manager/addHotel",hotel);
       }
  
       public updateHotel(hotel: Hotel):Observable<Hotel> {
        return this.http.put<Hotel>("http://localhost:8081/Booking/Admin/updateHotel",hotel);
      }
    
      public updateHotelByManager(hotel: Hotel):Observable<Hotel> {
        return this.http.put<Hotel>("http://localhost:8081/Booking/Manager/updateHotel",hotel);
      }
    
      
  
       public deleteHotel(id: number): Observable<any> {
        return this.http.delete<void>("http://localhost:8081/Booking/Admin/deleteHotelById/"+id);
      }

      public activeHotel(id:number):Observable<any> {
        return this.http.put<void>("http://localhost:8081/Booking/Admin/activeHotel/"+id,null)
      }
     
  }
