import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceupdateComponent } from './financeupdate.component';

describe('FinanceupdateComponent', () => {
  let component: FinanceupdateComponent;
  let fixture: ComponentFixture<FinanceupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
