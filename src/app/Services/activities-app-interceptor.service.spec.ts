import { TestBed } from '@angular/core/testing';

import { ActivitiesAppInterceptorService } from './activities-app-interceptor.service';

describe('ActivitiesAppInterceptorService', () => {
  let service: ActivitiesAppInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesAppInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
