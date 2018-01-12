import { TestBed, inject } from '@angular/core/testing';

import { AzureRestService } from './azure-rest.service';

describe('AzureRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AzureRestService]
    });
  });

  it('should be created', inject([AzureRestService], (service: AzureRestService) => {
    expect(service).toBeTruthy();
  }));
});
