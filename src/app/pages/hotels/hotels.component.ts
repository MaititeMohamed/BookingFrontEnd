import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotelModel';
import { HotelService } from 'src/app/service/hotelService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Manager } from 'src/app/model/manager';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

 hotels: Hotel[] = [];

  constructor(private hotelService: HotelService, private router: Router) { }

  ngOnInit(): void {
    this.getAllHotels();
  }
  
  getAllHotels() {
    this.hotelService.getAllHotels().subscribe({
      next: (result) => {
        console.log(result);
        this.hotels = result;
        console.log(this.hotels);
      },
      error: (e) => console.error(e)
    });
  }


  public addHotel(addForm: NgForm):void{
    this.hotelService.addHotel(addForm.value).subscribe(
      (response: Hotel) => {
        console.log(response);
        this.getAllHotels();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  
  public UpdateHotel(hotel: Hotel): void {
    this.hotelService.updateHotel(hotel).subscribe(
      (response: Hotel) => {
        console.log(response);
        this.getAllHotels();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteHotelById(id: number): void {
    this.hotelService.deleteHotel(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllHotels();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
