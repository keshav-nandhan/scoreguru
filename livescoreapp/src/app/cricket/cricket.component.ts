import { Component, OnInit } from '@angular/core';
import {ScoreapiService} from '../scoreapi.service'
import {IPosts} from '../../app/score.model'

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.scss']
})
export class CricketComponent implements OnInit {

  constructor(private serviceobj:ScoreapiService) { }

  scoreapiobj:IPosts[];
  matchscorecard:any[];
  ngOnInit(){
    this.getscore();
    this.getmatchscore(1204857);
  }
  getscore(){
    this.serviceobj.getPosts().subscribe(data=>{
      this.scoreapiobj=data;
      console.log("unique_id"+this.scoreapiobj["matches"][0]["unique_id"]);
    });
    return this.scoreapiobj;
    }
    getmatchscore(unique_id)
    {
      //debugger;
      let scoreobj:any;
      this.serviceobj.getScore(unique_id).subscribe(data=>{
        scoreobj=data;
        //console.log("scoreobj :"+JSON.stringify(scoreobj));
        // scoreobj["matches"][0].forEach((obj)=>{
        //   console.log(obj[unique_id]);
        // });
      });
      return scoreobj;
    }

}
