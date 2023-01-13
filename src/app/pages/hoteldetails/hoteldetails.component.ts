import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/model/hotelModel';
import { Room } from 'src/app/model/roomModel';
import { HotelService } from 'src/app/service/hotelService';
import { RoomService } from 'src/app/service/roomService';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.css']
  
})
export class HoteldetailsComponent implements OnInit {
 
  hotel!: Hotel;
  rooms: Room[]=[];
  id!: number;
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private hotelService: HotelService,
    private roomService: RoomService) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.getHotelById(this.id));
    console.log(this.getRoomsByHotelId(this.id))

  }


  getHotelById(id:number):any{
    this.hotelService.getHotelById(id).subscribe({
      next: (result) => {
        console.log(result);
        this.hotel = result;
      },
      error: (e) => console.error(e)
    });
  }

  getRoomsByHotelId(id:number):any{
    this.roomService.getRoomsByHotleId(id).subscribe({
      next:(result)=>{
        console.log(result);
        this.rooms = result;
      },
      error: (e) => console.error(e)
    })

  }


}
