import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerupdateComponent } from './trainerupdate.component';

describe('TrainerupdateComponent', () => {
  let component: TrainerupdateComponent;
  let fixture: ComponentFixture<TrainerupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
