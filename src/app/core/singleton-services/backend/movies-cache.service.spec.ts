import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MoviesCacheService } from './movies-cache.service';
import { BackendService } from './backend.service';

describe('MoviesService', () => {
  let service: MoviesCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: 'BACKEND_BASE_URL', useValue: '/api' }
      ]
    });
    service = TestBed.inject(MoviesCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
