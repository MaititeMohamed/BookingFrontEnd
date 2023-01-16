export class User {

    id:any;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    status:string;
    role:string;
    data!:string;
    constructor(){
       this.firstName="";
       this.lastName="";
       this.email="";
       this.password="";
       this.status="";
       this.role=""}
}