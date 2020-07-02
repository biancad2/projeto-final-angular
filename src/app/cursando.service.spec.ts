import { TestBed } from '@angular/core/testing';

import { CursandoService } from './cursando.service';

describe('CursandoService', () => {
  let service: CursandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
