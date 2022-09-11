import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTimesheetComponent } from './payment-timesheet.component';

describe('PaymentTimesheetComponent', () => {
  let component: PaymentTimesheetComponent;
  let fixture: ComponentFixture<PaymentTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
