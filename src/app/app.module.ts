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

@NgModule({
declarations:[
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    HotelsComponent
],

imports:[
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule],



bootstrap:[AppComponent]


})
export class AppModule{}
