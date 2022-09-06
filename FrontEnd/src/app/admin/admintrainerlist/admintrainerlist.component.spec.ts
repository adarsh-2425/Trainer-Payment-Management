import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintrainerlistComponent } from './admintrainerlist.component';

describe('AdmintrainerlistComponent', () => {
  let component: AdmintrainerlistComponent;
  let fixture: ComponentFixture<AdmintrainerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintrainerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintrainerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
