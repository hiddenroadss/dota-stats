import { TestBed } from '@angular/core/testing';

import { RootRouterStateSerializerService } from './root-router-state-serializer.service';

describe('RootRouterStateSerializerService', () => {
  let service: RootRouterStateSerializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootRouterStateSerializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
