import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { HoteldetailsComponent } from './pages/hoteldetails/hoteldetails.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ManagersComponent } from './pages/managers/managers.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RoomdetailsComponent } from './pages/roomdetails/roomdetails.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"hotels",component:HotelsComponent},
  {path:"footer",component:FooterComponent},
  {path:"hoteldetails/:id",component:HoteldetailsComponent},
  {path:"roomdetails/:id",component:RoomdetailsComponent},
  {path:"clients",component:ClientsComponent},
  {path:"managers",component:ManagersComponent},
  {path:"rooms",component:RoomComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,

  )],
  exports: [RouterModule]

})
export class AppRoutingModule { }
