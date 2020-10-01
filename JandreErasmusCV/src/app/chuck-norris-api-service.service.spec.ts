import { TestBed } from '@angular/core/testing';

import { ChuckNorrisApiServiceService } from './chuck-norris-api-service.service';

describe('ChuckNorrisApiServiceService', () => {
  let service: ChuckNorrisApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckNorrisApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
