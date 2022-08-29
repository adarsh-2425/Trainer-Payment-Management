import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancenavbarComponent } from './financenavbar.component';

describe('FinancenavbarComponent', () => {
  let component: FinancenavbarComponent;
  let fixture: ComponentFixture<FinancenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancenavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
