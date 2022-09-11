import { TestBed } from '@angular/core/testing';

import { PaypackageService } from './paypackage.service';

describe('PaypackageService', () => {
  let service: PaypackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaypackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
