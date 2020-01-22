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
  constructor(private serviceobj:ScoreapiService){};
  title = 'livescoreapp';

  scoreapiobj:IPosts[];
  ngOnInit(){
    this.getscore();
  }

  getscore(){
    this.serviceobj.getPosts().subscribe(data=>{
      this.scoreapiobj=data;
      console.log(this.scoreapiobj)});
    return this.scoreapiobj;
  }
  
}
