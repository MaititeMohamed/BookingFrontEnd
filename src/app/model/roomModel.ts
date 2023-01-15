
export class Room{

      id:any;
      roomNumber!:number;
      price!:number;
      numberBeds!:number;
      roomStatus!:string;
      capacity!:number;
      description!:string;
      roomType!:string;
      hotel!:{
         hotelName:string;
         manager:{
            firstName:string;
         }
       };
      


     constructor(){
        this.id=null;
        this.numberBeds=0;
        this.price=0;
        this.roomStatus="";
        this.roomNumber=0;
        this.hotel.hotelName="";
     }


}