import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCommissionComponent } from './pop-up-commission.component';

describe('PopUpClassGroupComponent', () => {
  let component: PopUpCommissionComponent;
  let fixture: ComponentFixture<PopUpCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpCommissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
