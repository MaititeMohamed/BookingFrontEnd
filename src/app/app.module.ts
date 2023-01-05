import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from "./app-routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
declarations:[
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent
],

imports:[BrowserModule,FormsModule,AppRoutingModule],



bootstrap:[AppComponent] 


})
export class AppModule{}