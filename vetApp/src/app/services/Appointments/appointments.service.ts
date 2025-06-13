import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DoctorDTO } from '../../utils/DTO/DoctorDTO';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {


  private availableDoctors: BehaviorSubject<Array<DoctorDTO>> = new BehaviorSubject<Array<DoctorDTO>>([]);


  availableDoctorsRequest() : void {
  this.httpClient.get<Array<any>>('http://localhost:8080/doctor/getAllAvailable',{
      observe: 'body',
      withCredentials: true
    }).pipe(
      map((availableDoctors : Array<any>) => {
        return availableDoctors.map((doctor: any) => {
          console.log(doctor);
          return new DoctorDTO(
            doctor.id,
              doctor.name,
              doctor.role,
              doctor.speciality,
              new Date(doctor.startShiftAt),
              doctor.medicalAppointments.map((date: any) => new Date(date))
            );
      });
      

    })).subscribe((doctors: Array<DoctorDTO>) =>{
      this.availableDoctors.next(doctors);
    });
  }

getAvailableDoctors(): Observable<Array<DoctorDTO>>{
  return this.availableDoctors.asObservable();
}


  constructor(private httpClient: HttpClient) { }



}
