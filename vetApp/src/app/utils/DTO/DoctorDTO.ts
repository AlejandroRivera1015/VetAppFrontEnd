


export class DoctorDTO {

    private id: number;
    private name: string;
    private role: string;
    private speciality : string;
    private startShiftAt: Date;
    private medicalAppointments : Array<Date>;



    constructor(id: number, name: string, role: string, speciality: string, startShiftAt: Date, medicalAppointments: Array<Date>){
        this.id = id;
        this.name = name;
        this.role = role;
        this.speciality = speciality;
        this.startShiftAt = startShiftAt;
        this.medicalAppointments = medicalAppointments;
        
    }

}