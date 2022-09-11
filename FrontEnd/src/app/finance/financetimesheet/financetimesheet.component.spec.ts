import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancetimesheetComponent } from './financetimesheet.component';

describe('FinancetimesheetComponent', () => {
  let component: FinancetimesheetComponent;
  let fixture: ComponentFixture<FinancetimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancetimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancetimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
