import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DoctorDTO } from '../../utils/DTO/DoctorDTO';
import { UserService } from '../userServices/user.service';
import { UserDTO } from '../../utils/DTO/UserDTO';
import { AppointmentDTO } from '../../utils/DTO/AppointmentDTO';
import { NotificationService } from '../Notifications/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService implements OnInit {


  private availableDoctors: BehaviorSubject<Array<DoctorDTO>> = new BehaviorSubject<Array<DoctorDTO>>([]);
  private selectedDoctor = new BehaviorSubject<number>(0);
  private drSchedule = new BehaviorSubject<Array<Date>>([]);

  private appointmentRequest = new AppointmentDTO(); 
  private userAppointments = new BehaviorSubject<Array<AppointmentDTO>>([]);


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


  setAppointmentRequest(scheduleDate : Date):void{
    
    this.appointmentRequest.setDate(scheduleDate);
    this.httpClient.post<any>('http://localhost:8080/appointments/create', this.appointmentRequest,{
      observe: 'response',
      withCredentials: true 
    }).subscribe({
      next: (response: HttpResponse<any>) =>{
        this.notificationService.toggleOnScreen();
        this.notificationService.setMainMessage("Creating Request ...")
  
        if(response.status === 200){
          this.notificationService.setMainMessage("Succes!")  
        }

        else{
          if(response.status === 409 ){
            this.notificationService.setMainMessage("Cant create appointment, please chose other appoitment / dr ")
          }
  
          if(response.status === 500){
            this.notificationService.setMainMessage("Cant connect to the server, please try again later");
          }
  
        }
  
      } ,
      error : (error) => {
        this.notificationService.toggleOnScreen();
        this.notificationService.setMainMessage("cant connect to server")
      }
    });
  }

  constructor(private httpClient : HttpClient, private userService : UserService, private notificationService : NotificationService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user : UserDTO | null) =>{

      if(user){
        this.appointmentRequest.setClientId(user.getId());
        this.appointmentRequest.setDoctorId(this.selectedDoctor.getValue());

      }
        

    })
      
  }


}
