import { TestBed, inject } from '@angular/core/testing';

import { PartiteService } from './partite.service';

describe('PartiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartiteService]
    });
  });

  it('should be created', inject([PartiteService], (service: PartiteService) => {
    expect(service).toBeTruthy();
  }));
});
