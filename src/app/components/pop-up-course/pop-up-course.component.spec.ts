import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCourse } from './pop-up-course.component';

describe('PopUpGroupComponent', () => {
  let component: PopUpCourse;
  let fixture: ComponentFixture<PopUpCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpCourse ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpCourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
