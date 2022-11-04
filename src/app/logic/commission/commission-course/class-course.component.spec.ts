import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommissionCourseComponent } from './class-course.component';

describe('ClassGroupComponent', () => {
  let component: CommissionCourseComponent;
  let fixture: ComponentFixture<CommissionCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
