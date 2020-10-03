import { TestBed } from '@angular/core/testing';

import { RetailerAuthGuardService } from './retailer-auth-guard.service';

describe('RetailerAuthGuardService', () => {
  let service: RetailerAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
