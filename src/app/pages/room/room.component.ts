import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/model/roomModel';
import { RoomService } from 'src/app/service/roomService';
import { StorageService } from 'src/app/service/storageService';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms :Room[]=[];

  constructor(private roomService:RoomService,private storageService:StorageService, private router: Router) { }

  ngOnInit(): void {

    if(this.storageService.isLoggedIn()){
      if (!(this.storageService.getAuthority() =="Manager" ||this.storageService.getAuthority() =="Admin")){
          this.router.navigate(["login"]);
      }
    this.getAllRooms();
  }else{
    this.router.navigate(["login"])
  }
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
