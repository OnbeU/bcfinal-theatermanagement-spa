import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BackendService } from './backend.service';
import { Movie } from './movie';

describe('BackendService', () => {
  let service: BackendService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new BackendService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should say hello', (done: DoneFn) => {
    const expectedValue: Movie[] = [];

    httpClientSpy.get.and.returnValue(of(expectedValue));

    service.getMovies().subscribe(value => {
      expect(value).withContext('because we asked nicely').toEqual(expectedValue);
      expect(value.length).withContext('because the array should be empty').toEqual(0);
      done();
    },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'because one call should have been made');
  });
});
