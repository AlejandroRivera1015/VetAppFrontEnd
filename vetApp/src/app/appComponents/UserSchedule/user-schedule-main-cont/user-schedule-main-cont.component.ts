import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AppointmentsService } from '../../../services/Appointments/appointments.service';
import { DoctorDTO } from '../../../utils/DTO/DoctorDTO';
import { DoctorDisplayComponent } from '../../DoctorsDisplay/doctor-display/doctor-display.component';
import { AvailableHoursDisplayComponent } from '../../AvailableHoursDisplay/available-hours-display/available-hours-display.component';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-user-schedule-main-cont',
  imports: [HeaderComponent,DoctorDisplayComponent,AvailableHoursDisplayComponent],
  standalone: true,
  templateUrl: './user-schedule-main-cont.component.html',
  styleUrl: './user-schedule-main-cont.component.css'
})
export class UserScheduleMainContComponent implements OnInit {

  private appointments = new BehaviorSubject<Array<DoctorDTO>>([]);

  constructor(private appointMentsService: AppointmentsService){

  }

  ngOnInit(): void {
    this.appointMentsService.availableDoctorsRequest();
  }



}
