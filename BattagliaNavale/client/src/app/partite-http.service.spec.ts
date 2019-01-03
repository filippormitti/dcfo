import { TestBed, inject } from '@angular/core/testing';

import { PartiteHttpService } from './partite-http.service';

describe('PartiteHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartiteHttpService]
    });
  });

  it('should be created', inject([PartiteHttpService], (service: PartiteHttpService) => {
    expect(service).toBeTruthy();
  }));
});
