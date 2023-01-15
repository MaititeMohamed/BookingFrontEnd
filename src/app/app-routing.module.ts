import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { HoteldetailsComponent } from './pages/hoteldetails/hoteldetails.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ManagersComponent } from './pages/managers/managers.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"hotels",component:HotelsComponent},
  {path:"hoteldetails/:id",component:HoteldetailsComponent},
  {path:"clients",component:ClientsComponent},
  {path:"managers",component:ManagersComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,

  )],
  exports: [RouterModule]

})
export class AppRoutingModule { }
