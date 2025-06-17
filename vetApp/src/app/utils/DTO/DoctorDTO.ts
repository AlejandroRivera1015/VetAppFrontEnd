


export class DoctorDTO {

    private id: number;
    private name: string;
    private role: string;
    private speciality : string;
    private startShiftAt: Date;
    private medicalAppointments : Array<Date>;



    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getRole(): string {
        return this.role;
    }
    public getSpeciality(): string {
        return this.speciality;
    }
    public getStartShiftAt(): Date {
        return this.startShiftAt;
    }
    public getMedicalAppointments(): Array<Date> {
        return this.medicalAppointments;
    }


    public static setDoctorAvailableHours(startShiftAt : Date, doctorMedicalAppointments: Array<Date>): Array<Date>{

        let tempHoursArray : Array<Date> = [];
        let availableHoursArray : Array<Date> = [];

        let actualDay: Date = new Date();


        if(actualDay.getDate() == startShiftAt.getDate()){

            for(let i = 1; i<20; i++){
                const minutesInterval : number = startShiftAt.getMinutes() + i*30;
                let tempDate = new Date(startShiftAt);                
                tempDate.setMinutes(minutesInterval);

                if((tempDate.getTime() > actualDay.getTime()) && (tempDate.getTime() - actualDay.getTime() >  1800000) ){
                    tempHoursArray.push(tempDate);
                }
            }


            if(doctorMedicalAppointments.length>0){
                doctorMedicalAppointments.forEach((apointment: Date) =>{
                    tempHoursArray.forEach((appointmentToValidate: Date) =>{
                        if(!(appointmentToValidate.getTime() == apointment.getTime())){
                            availableHoursArray.push(appointmentToValidate);
                        }
                    })
                })

            }
            else{
                availableHoursArray = tempHoursArray;
            }      
        }

        return tempHoursArray; 
    
    }



    constructor(id: number, name: string, role: string, speciality: string, startShiftAt: Date, medicalAppointments: Array<Date>){
        this.id = id;
        this.name = name;
        this.role = role;
        this.speciality = speciality;
        this.startShiftAt = startShiftAt;
        this.medicalAppointments = medicalAppointments;
        
    }

}