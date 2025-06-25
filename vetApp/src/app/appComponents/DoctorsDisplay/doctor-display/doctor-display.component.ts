import { Component, Input, OnInit } from '@angular/core';
import { AppointmentsService } from '../../../services/Appointments/appointments.service';
import { Observable } from 'rxjs';
import { DoctorDTO } from '../../../utils/DTO/DoctorDTO';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-doctor-display',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './doctor-display.component.html',
  styleUrl: './doctor-display.component.css'
})
export class DoctorDisplayComponent implements OnInit {

 
  public availableDoctors$ = new Observable<Array<DoctorDTO>>();


  public setDoctorId(doctorId : number):void{
    this.appointmentsServices.setSelectedDoctor(doctorId);    
  }

  constructor(private appointmentsServices : AppointmentsService) { }

  ngOnInit(): void {
    this.availableDoctors$ = this.appointmentsServices.getAvailableDoctors();
  }

}
