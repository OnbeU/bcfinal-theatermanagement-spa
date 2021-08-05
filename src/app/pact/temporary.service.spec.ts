import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TemporaryService } from './temporary.service';

describe('TemporaryService', () => {
  let service: TemporaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TemporaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
