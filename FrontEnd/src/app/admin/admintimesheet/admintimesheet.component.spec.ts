import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintimesheetComponent } from './admintimesheet.component';

describe('AdmintimesheetComponent', () => {
  let component: AdmintimesheetComponent;
  let fixture: ComponentFixture<AdmintimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
