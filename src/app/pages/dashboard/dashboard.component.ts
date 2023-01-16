import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/service/clientService';
import { StorageService } from 'src/app/service/storageService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private clientService: ClientService,private storageService:StorageService, private router: Router) { }

  ngOnInit():void {

    if(this.storageService.isLoggedIn()){
      if (!(this.storageService.getAuthority() =="Admin" ||this.storageService.getAuthority()=="Manager")){
        this.router.navigate(["login"]);
      }
     
    }else{
      this.router.navigate(["login"]);
    }
   
  }

}
