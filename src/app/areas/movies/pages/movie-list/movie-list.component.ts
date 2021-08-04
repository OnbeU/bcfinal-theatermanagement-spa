import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/core/singleton-services/backend/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readMovies(): Observable<Movie[]> {
    const m: Movie = new Movie('tt0076759', 'Star Wars: Episode IV - A New Hope');
    const response: Movie[] = [ m ];

    return of(response);
  }

}
