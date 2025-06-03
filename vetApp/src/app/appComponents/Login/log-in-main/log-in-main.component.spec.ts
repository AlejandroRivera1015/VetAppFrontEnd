import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInMainComponent } from './log-in-main.component';

describe('LogInMainComponent', () => {
  let component: LogInMainComponent;
  let fixture: ComponentFixture<LogInMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
