import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Manager } from 'src/app/model/manager';
import { ManagerService } from 'src/app/service/managerService';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

managers:Manager[]=[];
  editManager!: Manager;
  deleteManager!: Manager;

  constructor(private managerService:ManagerService) { }

  ngOnInit(): void {
    this.getAllManagers();
  }

  public getAllManagers(){
   this.managerService.getAllMangers().subscribe({
    next: (result) => {
      console.log(result);
      this.managers = result;
      console.log(this.managers);
    },
    error: (e) => console.error(e)
   });
  }


  public addManager(addForm: NgForm):void{
    this.managerService.addManager(addForm.value).subscribe(
      (response: Manager) => {
        console.log(response);
        this.getAllManagers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public updateManager(manager: Manager): void {
    this.managerService.updateManager(manager).subscribe(
      (response: Manager) => {
        console.log(response);
       this.getAllManagers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteManagerByid(id: number): void {
    this.managerService.deleteManager(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllManagers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(manager: Manager, mode: string): void {
    const container = document.getElementById('main');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'edit') {
      this.editManager =manager;
      button.setAttribute('data-bs-target', '#updateManager');
    }
    if (mode === 'delete') {
      this.deleteManager = manager;
      button.setAttribute('data-bs-target', '#deleteManager');
    }
   container!.appendChild(button);
    button.click();
  }
}
