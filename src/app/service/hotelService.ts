import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class HotelService{
 
    constructor(private http: HttpClient) { }
    getAllHotels(): Observable<any> {
        return this.http.get("http://localhost:8080/Booking/Admin/getAllHotels");
      }


  }
