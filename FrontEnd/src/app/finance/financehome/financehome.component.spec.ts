import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancehomeComponent } from './financehome.component';

describe('FinancehomeComponent', () => {
  let component: FinancehomeComponent;
  let fixture: ComponentFixture<FinancehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
