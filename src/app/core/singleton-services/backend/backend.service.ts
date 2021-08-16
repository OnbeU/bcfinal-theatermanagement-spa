import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { ConfigService } from './../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  readonly baseUrl: string;

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService) {
    this.baseUrl = configService.apiBaseUrl;
  }

  getMovies(): Observable<Movie[]> {
    const moviesUrl = `${this.baseUrl}/movies`;
    console.log(`**** moviesUrl ${moviesUrl}`);

    /// return of([]);
    return this.httpClient.get<Movie[]>(moviesUrl);
  }

}
