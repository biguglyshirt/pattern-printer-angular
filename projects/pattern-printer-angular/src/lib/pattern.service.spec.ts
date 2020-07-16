import { TestBed } from '@angular/core/testing';

import { PatternService } from './pattern.service';

describe('PatternPrinterAngularService', () => {
  let service: PatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
