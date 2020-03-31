import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import{ScoreapiService} from './scoreapi.service'
import { HttpClientModule } from '@angular/common/http'
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CricketComponent } from './cricket/cricket.component';
import { HomeComponent } from './home/home.component';
import { FootballComponent } from './football/football.component';
import { NbaComponent } from './nba/nba.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CricketComponent,
    HomeComponent,
    FootballComponent,
    NbaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ScoreapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
