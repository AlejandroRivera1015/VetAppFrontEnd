import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDisplayComponent } from './doctor-display.component';

describe('DoctorDisplayComponent', () => {
  let component: DoctorDisplayComponent;
  let fixture: ComponentFixture<DoctorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
