import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypackageComponent } from './paypackage.component';

describe('PaypackageComponent', () => {
  let component: PaypackageComponent;
  let fixture: ComponentFixture<PaypackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
