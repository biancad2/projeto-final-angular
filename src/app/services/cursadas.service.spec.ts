import { TestBed } from '@angular/core/testing';

import { CursadasService } from './cursadas.service';

describe('CursadasService', () => {
  let service: CursadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
