import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupObsComponent } from './group-obs.component';

describe('GroupObsComponent', () => {
  let component: GroupObsComponent;
  let fixture: ComponentFixture<GroupObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
