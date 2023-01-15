import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/model/roomModel';
import { RoomService } from 'src/app/service/roomService';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms :Room[]=[];
  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
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
}
