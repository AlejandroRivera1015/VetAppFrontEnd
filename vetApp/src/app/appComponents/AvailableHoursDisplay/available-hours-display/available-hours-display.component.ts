import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppointmentsService } from '../../../services/Appointments/appointments.service';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-available-hours-display',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './available-hours-display.component.html',
  styleUrl: './available-hours-display.component.css'
})
export class AvailableHoursDisplayComponent implements OnInit {

  private appointments : Array<Date> = [];

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
      this.appointmentsService.getSelectedDoctor().subscribe(
      (doctorId : number) =>{
          this.appointmentsService.getDoctorAvailableHours(doctorId);        
      });
  }

}
