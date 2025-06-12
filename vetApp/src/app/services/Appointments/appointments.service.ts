import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DoctorDTO } from '../../utils/DTO/DoctorDTO';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private httpClient: HttpClient) { }


  getAvailableDoctors() : Observable<Array<DoctorDTO>> {
    return this.httpClient.get<Array<DoctorDTO>>('http://localhost:8080/doctor/getAllAvailable',{
      observe: 'body',
      withCredentials: true
    }).pipe(map((availableDoctors : Array<DoctorDTO>) => {
      return availableDoctors;
    }));
  }
}
