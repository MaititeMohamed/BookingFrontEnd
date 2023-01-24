import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from "./app-routing.module";
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { HoteldetailsComponent } from './pages/hoteldetails/hoteldetails.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ManagersComponent } from './pages/managers/managers.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
import { RoomdetailsComponent } from './pages/roomdetails/roomdetails.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';

@NgModule({
declarations:[
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    HotelsComponent,
    HoteldetailsComponent,
    ClientsComponent,
    ManagersComponent,
    HomeComponent,
    RoomComponent,
    RoomdetailsComponent,
    LoginComponent,
    RegisterComponent,
    AddRoomComponent
],

imports:[
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule],



bootstrap:[AppComponent]


})
export class AppModule{}
