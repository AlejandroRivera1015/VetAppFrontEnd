import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableHoursDisplayComponent } from './available-hours-display.component';

describe('AvailableHoursDisplayComponent', () => {
  let component: AvailableHoursDisplayComponent;
  let fixture: ComponentFixture<AvailableHoursDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableHoursDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableHoursDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
