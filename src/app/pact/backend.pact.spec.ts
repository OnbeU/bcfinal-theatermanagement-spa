import { PactWeb } from '@pact-foundation/pact-web';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { mockProvider } from '@ngneat/spectator';

import { BackendService } from '../core/singleton-services/backend/backend.service';
import { ConfigService } from '../core/singleton-services/config/config.service';

describe('BackendService consumer-defined contracts', () => {
  let service: BackendService;
  let provider: PactWeb;
  let originalTimeout: number;

  beforeAll((done) => {
    provider = new PactWeb({
      // consumer: 'bcfinal-theatermanagement-spa',
      // provider: 'bcfinal-theatermanagement-bff',
      host: '127.0.0.1',
      port: 1234,
      spec: 2
    });

    // Required if run with `singleRun: false`
    provider.removeInteractions().then(done);

    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        mockProvider(ConfigService, {
          apiBaseUrl: 'http://localhost:1234/api'
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
            body: '[]',
          },
        }
      )
      .then(() =>
        {
          console.log('Interaction added');
          done();
        }
        , done.fail)
  });

  afterAll((done) => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    provider.finalize().then(done, done.fail)
  });

  it("has no movies", (done) => {
    console.log('------------- preparing');

    service.getMovies().subscribe(
      movies => {
        expect(movies).toEqual([]);
        console.log('^^^^^^^^^^^^^ success!');
        provider.finalize();
        done();
      }, error => {
        console.log('vvvvvvvvvvvvv failure!');
        done.fail(error);
      }
    );

    // service.getMoviesAsJson().subscribe(
    //   json => {
    //     expect(json).not.toBeEmpty();
    //     //expect(json.replace(/\s/g, "")).toEqual('[]');
    //     console.log('^^^^^^^^^^^^^ success! json is ' + json);
    //     provider.finalize();
    //     done();
    //   }, error => {
    //     console.log('vvvvvvvvvvvvv failure!');
    //     done.fail(error);
    //   }
    // );

    console.log('------------- waiting');
  });
});
