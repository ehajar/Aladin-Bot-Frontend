import { TestBed } from '@angular/core/testing';

import { ServiceHelper } from './service-helper.service';

describe('ServiceHelpService', () => {
  let service: ServiceHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
