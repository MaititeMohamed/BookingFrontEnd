import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotelModel';
import { Room } from 'src/app/model/roomModel';
import { HotelService } from 'src/app/service/hotelService';
import { RoomService } from 'src/app/service/roomService';
import { StorageService } from 'src/app/service/storageService';

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
    private roomService: RoomService ,private storageService:StorageService, private router:Router) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    

    if(this.storageService.isLoggedIn()){
      if (!(this.storageService.getAuthority() =="Admin" || this.storageService.getAuthority() =="Manger")){
        this.router.navigate(["login"]);
      }
      console.log(this.getHotelById(this.id));
    console.log(this.getRoomsByHotelId(this.id))
     
    }else{
      this.router.navigate(["login"]);
    }

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
