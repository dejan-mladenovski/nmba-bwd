import { TestBed, inject } from '@angular/core/testing';

import { ContactResolveService } from './contact-resolve.service';

describe('ContactResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactResolveService]
    });
  });

  it('should ...', inject([ContactResolveService], (service: ContactResolveService) => {
    expect(service).toBeTruthy();
  }));
});
