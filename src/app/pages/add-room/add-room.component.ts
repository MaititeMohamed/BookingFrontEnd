import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/model/roomModel';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  room: Room;
  constructor() {
    this.room = new Room();
    this.room.hotel.manager.id =2
   }

  ngOnInit(): void {
  }
  public createRoom(){}
}
