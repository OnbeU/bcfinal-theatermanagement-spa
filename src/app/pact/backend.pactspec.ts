// Current state: This isn't going to work when multiple browser windows are
// running in parallel. Will need to rethink. Probably will have to run this
// as a one-off test.

import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../core/singleton-services/backend/movie';
import { PactWeb } from '@pact-foundation/pact-web';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { BackendService } from '../core/singleton-services/backend/backend.service';

describe('BackendService consumer-defined contracts', () => {
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
        { provide: 'BACKEND_BASE_URL', useValue: '/api' },
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
    expect(service.baseUrl).toBe('/api');
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
});
