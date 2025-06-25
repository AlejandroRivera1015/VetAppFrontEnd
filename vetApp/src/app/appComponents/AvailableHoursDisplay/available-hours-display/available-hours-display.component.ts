import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppointmentsService } from '../../../services/Appointments/appointments.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-available-hours-display',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './available-hours-display.component.html',
  styleUrl: './available-hours-display.component.css'
})
export class AvailableHoursDisplayComponent implements OnInit {

  public appointments = new BehaviorSubject<Array<Date>>([]);
  public drId = new BehaviorSubject<number>(0);

  constructor(private appointmentsService: AppointmentsService) {}


 public setAppointment(appointment: Date): void {    
  this.appointmentsService.setAppointmentRequest(appointment);
 }

  ngOnInit(): void {
      this.appointmentsService.getSelectedDoctor().subscribe(
      (doctorId : number) =>{
        this.drId.next(doctorId);
          this.appointmentsService.getDoctorAvailableHours(doctorId);        
      });

      this.appointmentsService.getDrSchedule().subscribe(
        (drAvailability : Array<Date>) =>{
            this.appointments.next(drAvailability);
        }
      )

  }

}
