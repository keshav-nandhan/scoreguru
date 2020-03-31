import { Component, Input, OnInit } from '@angular/core';
import {ScoreapiService} from './scoreapi.service'
import {IPosts} from '../app/score.model'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(){};
  title = 'livescoreapp';
  ngOnInit(){
  }
}
