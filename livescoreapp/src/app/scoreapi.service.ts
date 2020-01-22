import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { IPosts } from '../app/score.model';
@Injectable({
  providedIn: 'root'
})

export class ScoreapiService {

  constructor(private http: HttpClient) { }
  private _postsURL = "https://cricapi.com/api/matches?apikey=6QuosyAP5bN5EaglBrhXXPdPsM23";
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getPosts():Observable<IPosts[]>{
    return this.http.get<IPosts[]>(this._postsURL);
}

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}
