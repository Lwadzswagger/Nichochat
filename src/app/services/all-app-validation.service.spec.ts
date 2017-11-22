import { TestBed, inject } from '@angular/core/testing';

import { AllAppValidationService } from './all-app-validation.service';

describe('AllAppValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllAppValidationService]
    });
  });

  it('should be created', inject([AllAppValidationService], (service: AllAppValidationService) => {
    expect(service).toBeTruthy();
  }));
});
