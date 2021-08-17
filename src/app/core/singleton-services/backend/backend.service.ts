import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.httpClient.get<Movie[]>(moviesUrl);
  }
}
