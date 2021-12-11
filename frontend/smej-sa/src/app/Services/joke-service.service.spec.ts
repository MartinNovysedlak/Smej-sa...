import { TestBed } from '@angular/core/testing';

import { JokeServiceService } from './joke-service.service';

describe('JokeServiceService', () => {
  let service: JokeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
