import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Resevation } from 'src/app/model/reservation';
import { Room } from 'src/app/model/roomModel';
import { RoomService } from 'src/app/service/roomService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {
  id!: number;
  room!: Room;
  Reservation!: Resevation;
  constructor(private activatedRoute: ActivatedRoute,
             private roomService:RoomService
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
     console.log( this.getRoomById(this.id));
  }


  getRoomById(id:number):any{
    this.roomService.getRoomById(id).subscribe({
      next: (result) => {
        console.log(result);
        this.room = result;
      },
      error: (e) => console.error(e)
    });
  }

  startdate="12-23-5262"
  
  
  
  public reservation(addForm: NgForm):void{
    this.roomService.reservation(addForm.value).subscribe(
      
      (response: Resevation) => {
        console.log(addForm);
        console.log(response);
        addForm.reset();
        Swal.fire(
          'Resevation success',
          'Start date '+ response.startDate + '<br>'+
          'End date '+ response.endDate,
          'success'
        )
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
