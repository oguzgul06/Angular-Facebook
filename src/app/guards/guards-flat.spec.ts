import { TestBed } from '@angular/core/testing';

import { GuardsFlat.Service.TsService } from './guards-flat..service';

describe('GuardsFlat.Service.TsService', () => {
  let service: GuardsFlat.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardsFlat.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
