import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from './movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiBaseUrl = `${environment.apiBaseUrl}`;

  constructor(
    private httpClient: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    const moviesUrl = `${this.apiBaseUrl}/movies`;
    return this.httpClient.get<Movie[]>(moviesUrl);
  }

}
