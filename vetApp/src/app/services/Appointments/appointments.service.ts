import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DoctorDTO } from '../../utils/DTO/DoctorDTO';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {


  private availableDoctors: BehaviorSubject<Array<DoctorDTO>> = new BehaviorSubject<Array<DoctorDTO>>([]);
  private selectedDoctor = new BehaviorSubject<number>(0);
  private drSchedule = new BehaviorSubject<Array<Date>>([]);


  availableDoctorsRequest() : void {
  this.httpClient.get<Array<any>>('http://localhost:8080/doctor/getAllAvailable',{
      observe: 'body',
      withCredentials: true
    }).pipe(
      map((availableDoctors : Array<any>) => {
        return availableDoctors.map((doctor: any) => {
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

  getSelectedDoctor(): Observable<number>{
    return this.selectedDoctor.asObservable();
  }

  getDrSchedule():Observable<Array<Date>>{
    return this.drSchedule.asObservable();
  }

  setSelectedDoctor(doctorId: number):void{
    this.selectedDoctor.next(doctorId);
  }

  getDoctorAvailableHours(doctorId: number):void{   
    
    let drAvailability:Array<Date> = [];

    this.getAvailableDoctors().pipe(
      map((availableDoctors : Array<DoctorDTO>)=>{

        let selectedDr  = availableDoctors.find(doctor => doctor.getId() === doctorId);

        if(selectedDr){
          let doctorStartShift: Date = selectedDr.getStartShiftAt();
          let doctorMedicalAppointments : Array<Date> = selectedDr.getMedicalAppointments();
          drAvailability = DoctorDTO.setDoctorAvailableHours(doctorStartShift,doctorMedicalAppointments);
          return drAvailability;
        }
        else
          return [];
        })
      ).subscribe((drAvailability : Array<Date>) =>{
        this.drSchedule.next(drAvailability);
      });

  }

  constructor(private httpClient: HttpClient) { }



}
