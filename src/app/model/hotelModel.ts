import { Manager } from "./manager";

 export class Hotel{
    id:any;
    hotelName!:String;
    address!:String;
    country!:String;
    city!:String
    status!:String
    // manager!:{
    //     id:any;
    //     firstName:string;
    //     lastName:string;
    //     email:string;
    //     status:string
    // }
    manager: Manager;

    constructor() {
        this.id=null;
        this.hotelName="";
        this.country="";
        this.city="";
        this.status="";
        this.manager = new Manager();


    }

}