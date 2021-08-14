import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockProvider } from '@ngneat/spectator';

import { BackendService } from '../core/singleton-services/backend/backend.service';
import { ConfigService } from '../core/singleton-services/config/config.service';

describe('BackendService', () => {
  let service: BackendService;

  beforeAll((done) => {
    done();
 });

  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        mockProvider(ConfigService, {
          apiBaseUrl: 'http://127.0.0.1:1234/api'
        }),
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
