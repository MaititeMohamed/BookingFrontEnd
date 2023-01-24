import { Hotel } from "./hotelModel";

export class Room{

      id!:number;
      roomNumber:number;
      price:number;
      numberBeds:number;
      roomStatus:string;
      capacity:number;
      description:string;
      roomType:string;
      hotel:Hotel;
      


     constructor(){
         this.numberBeds=0;
         this.price=0;
         this.roomStatus="";
         this.roomNumber=0;
         this.capacity =0;
         this.description ="";
         this.roomType ="";
         this.hotel=new Hotel();
     }


}