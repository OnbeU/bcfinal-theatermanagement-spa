import { TestBed } from '@angular/core/testing';

import { TemporaryService } from './temporary.service';

describe('TemporaryService', () => {
  let service: TemporaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
