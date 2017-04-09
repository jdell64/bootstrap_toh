import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Hero } from "app/hero";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {

  constructor( private http: Http) { }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map(res => res.json().data as Hero[]);
  }

}
