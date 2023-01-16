import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/model/roomModel';
import { RoomService } from 'src/app/service/roomService';
import { StorageService } from 'src/app/service/storageService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 rooms:Room[]=[];
  constructor(private roomService:RoomService,private storageService:StorageService) { }

  statusLogin=false;

  ngOnInit(): void {
     if(this.storageService.isLoggedIn()){
      this.statusLogin=true;
     }
    this.getAllRooms();
  }


  public getAllRooms(){
    this.roomService.getAllRooms().subscribe({
      next: (result) => {
        console.log(result);
        this.rooms = result;
        console.log(this.rooms);
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
