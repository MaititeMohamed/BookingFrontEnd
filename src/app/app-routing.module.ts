import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HotelsComponent } from './pages/hotels/hotels.component';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"hotels",component:HotelsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,

  )],
  exports: [RouterModule]

})
export class AppRoutingModule { }
