import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreapiService {

  constructor(private http: HttpClient) { }
  private _postsURL = "https://jsonplaceholder.typicode.com/posts";
  public cricscore:any={};

  getPosts(){
      return this.http
          .get(this._postsURL)
          .map((response: Response) => {
console.log(response);
          })
          .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}
