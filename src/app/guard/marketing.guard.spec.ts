import { TestBed } from '@angular/core/testing';

import { MarketingGuard } from './marketing.guard';

describe('MarketingGuard', () => {
  let guard: MarketingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MarketingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
