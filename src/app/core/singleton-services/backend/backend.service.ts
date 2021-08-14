import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.httpClient.get<Movie[]>(moviesUrl);
  }

}
