import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../core/singleton-services/backend/movie';
import { PactWeb } from '@pact-foundation/pact-web';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { mockProvider } from '@ngneat/spectator';

import { BackendService } from '../core/singleton-services/backend/backend.service';
import { ConfigService } from '../core/singleton-services/config/config.service';
import { environment } from 'src/environments/environment';

describe('BackendService consumer-defined contracts', () => {
  if (!environment.singleTestRun)
  {
    it('*** Skipping this test due to multiple test runners. *** This spec uses a global Pact server which cannot be shared by multiple test runners. To run this spec: npm run singletestrun', () => {
      expect(environment.singleTestRun).toBeFalse();
    });
  }
  else
  {
    let service: BackendService;
    let provider: PactWeb;

    beforeAll((done) => {
      provider = new PactWeb({
        // consumer: 'bcfinal-theatermanagement-spa',
        // provider: 'bcfinal-theatermanagement-bff',
        host: '127.0.0.1',
        port: 1234,
        spec: 2
      });
      // setTimeout(done, 10000);
      provider.removeInteractions().then(done);
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
      provider
        .addInteraction(
          {
            state: "There are no movies",
            uponReceiving: "a request to list the movies",
            withRequest: {
              method: "GET",
              path: "/api/movies",
            },
            willRespondWith: {
              status: 200,
              headers: {
                "Content-Type": "application/json",
              },
              body: [],
            },
          }
        )
        .then(done, done.fail)
    });

    // afterAll((done) => {
    //   provider.finalize().then(done, done.fail)
    // });

    it('should be created (by backend.pact.spec))', (done) => {
      expect(service).toBeTruthy();
      done();
    });

    it('should have correct baseUrl', (done) => {
      expect(service.baseUrl).toBe('http://127.0.0.1:1234/api');
      done();
    });

    // describe("when no movies", function () {
    //   beforeAll((done) => {
    //     provider
    //       .addInteraction(
    //         {
    //           state: "There are no movies",
    //           uponReceiving: "a request to list the movies",
    //           withRequest: {
    //             method: "GET",
    //             path: "/api/movies",
    //           },
    //           willRespondWith: {
    //             status: 200,
    //             headers: {
    //               "Content-Type": "application/json",
    //             },
    //             body: [],
    //           },
    //         }
    //       )
    //       .then(done, done.fail)
    //   });

    //   it("always succeeds", () => {
    //     console.log(`********${provider.mockService.baseUrl}******************************`);
    //   });

      // it("has no movies", (done) => {
      //   console.log(`********${provider.mockService.baseUrl}******************************`);
      //   service.getMovies().subscribe(
      //     movies => {
      //       expect(movies).toEqual([]);
      //       console.log('success!');
      //       done();
      //     },
      //     error => done.fail(error)
      //   );
      // });
    // });
  }
});
