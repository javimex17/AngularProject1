import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpClassGroupComponent } from './pop-up-class-group.component';

describe('PopUpClassGroupComponent', () => {
  let component: PopUpClassGroupComponent;
  let fixture: ComponentFixture<PopUpClassGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpClassGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpClassGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
