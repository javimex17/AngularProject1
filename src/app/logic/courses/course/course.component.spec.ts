import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';

describe('GroupComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente creado...', () => {
    expect(component).toBeTruthy();
  });
});
