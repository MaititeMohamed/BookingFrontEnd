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

  clients :Client[]=[];
  constructor( private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe({
      next: (result) => {
        console.log(result);
        this.clients = result;
        console.log(this.clients);
      },
      error: (e) => console.error(e)
    });
  }

  addClient(addForm: NgForm):void{
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
}
