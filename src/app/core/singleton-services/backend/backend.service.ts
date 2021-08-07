import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  readonly baseUrl: string;

  constructor(
    private httpClient: HttpClient,
    @Inject('BACKEND_BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getMovies(): Observable<Movie[]> {
    const moviesUrl = `${this.baseUrl}/movies`;
    return this.httpClient.get<Movie[]>(moviesUrl);
  }

}
