import { TestBed } from '@angular/core/testing';

import { PlanetserviceService } from './planetservice.service';

describe('PlanetserviceService', () => {
  let service: PlanetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
