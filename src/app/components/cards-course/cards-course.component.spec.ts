import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCourseComponent } from './cards-course.component';

describe('CardsGroupComponent', () => {
  let component: CardsCourseComponent;
  let fixture: ComponentFixture<CardsCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
