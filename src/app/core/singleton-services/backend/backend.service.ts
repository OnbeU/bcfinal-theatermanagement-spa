import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { ConfigService } from './../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  get apiBaseUrl(): string
  {
    return this.configService.apiBaseUrl;
  }

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService) {}

  getMovies(): Observable<Movie[]> {
    const moviesUrl = `${this.apiBaseUrl}/movies`;
    console.log(`**** moviesUrl ${moviesUrl}`);

    // this.httpClient.get<string>(moviesUrl)
    // .subscribe(content => {
    //   console.log(`**** content ${content}`);
    // });

    // return of([]);
    return this.httpClient.get<Movie[]>(moviesUrl);
  }

  getMoviesAsJson(): Observable<string> {
    const moviesUrl = `${this.apiBaseUrl}/movies`;
    console.log(`**** getMoviesAsJson moviesUrl ${moviesUrl}`);
    var action = this.httpClient.get<string>(moviesUrl);
    action.subscribe(
      result => {
        console.log('QQQQQQQQQQQ result is ' + result.toString());
      },
      err => {
        console.log('QQQQQQQQQQQ err is ' + err.toString());
      }
    )
    return action;
  }

}
