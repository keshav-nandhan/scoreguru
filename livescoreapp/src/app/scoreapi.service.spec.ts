import { TestBed } from '@angular/core/testing';

import { ScoreapiService } from './scoreapi.service';

describe('ScoreapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoreapiService = TestBed.get(ScoreapiService);
    expect(service).toBeTruthy();
  });
});
