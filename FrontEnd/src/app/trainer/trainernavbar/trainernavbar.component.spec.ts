import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainernavbarComponent } from './trainernavbar.component';

describe('TrainernavbarComponent', () => {
  let component: TrainernavbarComponent;
  let fixture: ComponentFixture<TrainernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainernavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
