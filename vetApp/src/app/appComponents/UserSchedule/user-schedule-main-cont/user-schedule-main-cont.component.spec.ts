import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScheduleMainContComponent } from './user-schedule-main-cont.component';

describe('UserScheduleMainContComponent', () => {
  let component: UserScheduleMainContComponent;
  let fixture: ComponentFixture<UserScheduleMainContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserScheduleMainContComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserScheduleMainContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
