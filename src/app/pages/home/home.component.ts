import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/model/roomModel';
import { User } from 'src/app/model/userModel';
import { RoomService } from 'src/app/service/roomService';
import { StorageService } from 'src/app/service/storageService';
import { UserService } from 'src/app/service/userService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 rooms:Room[]=[];
 firstName!:string;
  constructor(private roomService:RoomService,private storageService:StorageService,private userService:UserService,) { }

  statusLogin=false;

  ngOnInit(): void {
     if(this.storageService.isLoggedIn()){
      this.statusLogin=true;
      const email=this.storageService.getUserName();
      this.getUserByEmail(email);
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
  public getUserByEmail(email:string):any{
    this.userService.getUserByEmail(email).subscribe(
      (response: User)=> {
        console.log(response.firstName);
        this.firstName=response.firstName;
      },
    );
  }
}
