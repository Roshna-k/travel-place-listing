import { TestBed } from '@angular/core/testing';

import { TravelapiService } from './travelapi.service';

describe('TravelapiService', () => {
  let service: TravelapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
