import { TestBed } from '@angular/core/testing';

import { GroupObsService } from './group-obs.service';

describe('GroupObsService', () => {
  let service: GroupObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
