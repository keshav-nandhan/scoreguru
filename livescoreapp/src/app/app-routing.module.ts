import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CricketComponent } from './cricket/cricket.component';
import { HomeComponent } from './home/home.component';
import { FootballComponent } from './football/football.component';
import { NbaComponent } from './nba/nba.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cricket', component: CricketComponent },
  { path:'football',component:FootballComponent},
  { path:'nba',component:NbaComponent},
  { path:'contact',component:ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
