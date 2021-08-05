import { TestBed } from '@angular/core/testing';

import { BackendContractService } from './backend-contract.service';

describe('BackendContractService', () => {
  let service: BackendContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
