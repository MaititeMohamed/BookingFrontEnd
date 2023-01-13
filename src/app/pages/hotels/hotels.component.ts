import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotelModel';
import { HotelService } from 'src/app/service/hotelService';
import { Router } from '@angular/router';

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

}
