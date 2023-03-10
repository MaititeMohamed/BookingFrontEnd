import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotelModel';
import { HotelService } from 'src/app/service/hotelService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Manager } from 'src/app/model/manager';
import { HttpErrorResponse } from '@angular/common/http';
import { StorageService } from 'src/app/service/storageService';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  isManage=false;
 hotels: Hotel[] = [];
 editHotel!: Hotel;
 deleteHotel!: Hotel
 activetHotel!: Hotel;

  constructor(private hotelService: HotelService, private storageService:StorageService, private router: Router) { }
 
  ngOnInit(): void {
    const role=this.storageService.getUser().authorities[0].authority;
    if(role=="Manager"){
      this.isManage=true;
    }

    if(this.storageService.isLoggedIn()){
      if (!(this.storageService.getAuthority() =="Admin" || this.storageService.getAuthority() =="Manager")){
        this.router.navigate(["login"]);
      }
      this.getAllHotels();
    }else{

      this.router.navigate(["login"]);
    }
 
    
  }
  
  getAllHotels() {
    this.hotelService.getAllHotels().subscribe(
       (result) => {
        console.log(result);
        this.hotels = result;
        console.log(this.hotels);
      }
     );
  }


  public addHotel(addForm: NgForm):void{
    this.hotelService.addHotel(addForm.value).subscribe(
      (response: Hotel) => {
        console.log(response);
        this.getAllHotels();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  
  public UpdateHotel(hotel: Hotel): void {
    this.hotelService.updateHotel(hotel).subscribe(
      (response: Hotel) => {
        console.log(response);
        this.getAllHotels();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateHotelByManager(hotel: Hotel): void {
    this.hotelService.updateHotelByManager(hotel).subscribe(
      (response: Hotel) => {
        console.log(response);
        this.getAllHotels();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteHotelById(id: number): void {
    this.hotelService.deleteHotel(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllHotels();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public activeHotelById(id: number): void {
    this.hotelService.activeHotel(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllHotels();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onOpenModal(hotel: Hotel, mode: string): void {
    const container = document.getElementById('main');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'activehotel') {
      this.activetHotel =hotel;
      button.setAttribute('data-bs-target', '#activeHotel');
    }
    if (mode === 'edit') {
      this.editHotel =hotel;
      button.setAttribute('data-bs-target', '#updatehotel');
    }
    if (mode === 'delete') {
      this.deleteHotel = hotel;
      button.setAttribute('data-bs-target', '#deleteHotel');
    }
   container!.appendChild(button);
    button.click();
  }


}
