import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseObsComponent } from './course-obs.component';

describe('GroupObsComponent', () => {
  let component: CourseObsComponent;
  let fixture: ComponentFixture<CourseObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
