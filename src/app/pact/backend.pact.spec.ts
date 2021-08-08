import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BackendService } from '../core/singleton-services/backend/backend.service';

describe('BackendService', () => {
  let service: BackendService;

  beforeAll((done) => {
    done();
 });

  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: 'BACKEND_BASE_URL', useValue: 'http://127.0.0.1:1234/api' },
        BackendService
      ]
    });
    service = TestBed.inject(BackendService);
    done();
  });

  afterAll((done) => {
    done();
  });

  it('should be created (by backend.pact.spec))', (done) => {
    expect(service).toBeTruthy();
    done();
  });

  it('should have correct baseUrl', (done) => {
    expect(service.baseUrl).toBe('http://127.0.0.1:1234/api');
    done();
  });
});
