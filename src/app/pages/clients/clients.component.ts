
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/model/clientModel';
import { ClientService } from 'src/app/service/clientService';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
   editClient!: Client;
  deleteClient!: Client;
  clients :Client[]=[];
  constructor( private clientService: ClientService) { }

  ngOnInit():void {
    this.getAllClients();
  }

  public getAllClients(){
    this.clientService.getAllClients().subscribe({
      next: (result) => {
        console.log(result);
        this.clients = result;
        console.log(this.clients);
      },
      error: (e) => console.error(e)
    });
  }

  public addClient(addForm: NgForm):void{
    this.clientService.addClient(addForm.value).subscribe(
      (response: Client) => {
        console.log(response);
        this.getAllClients();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  
  public UpdateEmloyee(client: Client): void {
    this.clientService.updateClient(client).subscribe(
      (response: Client) => {
        console.log(response);
        this.getAllClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteClientById(id: number): void {
    this.clientService.deleteClient(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(client: Client, mode: string): void {
    const container = document.getElementById('main');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'edit') {
      this.editClient =client;
      button.setAttribute('data-bs-target', '#updateClient');
    }
    if (mode === 'delete') {
      this.deleteClient = client;
      button.setAttribute('data-bs-target', '#deleteClient');
    }
   container!.appendChild(button);
    button.click();
  }
}
