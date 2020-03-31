import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError,map} from 'rxjs/operators';
import { IPosts } from '../app/score.model';
@Injectable({
  providedIn: 'root'
})

export class ScoreapiService {

  constructor(private http: HttpClient) { }
  private _postsURL = "https://cricapi.com/api/matches?apikey=6QuosyAP5bN5EaglBrhXXPdPsM23";
  private matchscoreurl="https://cricapi.com/api/cricketScore?apikey=6QuosyAP5bN5EaglBrhXXPdPsM23";
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getPosts():Observable<IPosts[]>{
    return this.http.get<IPosts[]>(this._postsURL)
    .pipe(
      catchError(
      (err:HttpErrorResponse)=>{
        return Observable.throw(err.statusText);
    }))
}
getScore(uniqueid){
  return this.http.get(this.matchscoreurl+'&unique_id='+uniqueid)
  .pipe(
    catchError(
    (err:HttpErrorResponse)=>{
      return Observable.throw(err.statusText);
  }))
}


// getMatchScore(_matchid){
//   let params = new HttpParams().set('logNamespace', logNamespace);

//   return this._HttpClient.get(`${API_URL}/api/v1/data/logs`, { params: params })
// }

}
