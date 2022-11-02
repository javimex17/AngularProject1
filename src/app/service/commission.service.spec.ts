import { TestBed } from '@angular/core/testing';

import { ClassGroupService } from './commission.service';

describe('ClassGroupService', () => {
  let service: ClassGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
