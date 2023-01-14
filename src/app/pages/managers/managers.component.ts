import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { ManagerService } from 'src/app/service/managerService';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

managers:Manager[]=[];

  constructor(private managerService:ManagerService) { }

  ngOnInit(): void {
    this.getAllManagers();
  }

  getAllManagers(){
   this.managerService.getAllMangers().subscribe({
    next: (result) => {
      console.log(result);
      this.managers = result;
      console.log(this.managers);
    },
    error: (e) => console.error(e)
   });
  }

}
