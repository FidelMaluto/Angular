import { TestBed } from '@angular/core/testing';

import { BrasilAPIService } from './brasil-api.service';

describe('BrasilAPIService', () => {
  let service: BrasilAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrasilAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
