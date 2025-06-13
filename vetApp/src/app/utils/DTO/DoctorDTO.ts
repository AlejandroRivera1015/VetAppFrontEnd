


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



    constructor(id: number, name: string, role: string, speciality: string, startShiftAt: Date, medicalAppointments: Array<Date>){
        this.id = id;
        this.name = name;
        this.role = role;
        this.speciality = speciality;
        this.startShiftAt = startShiftAt;
        this.medicalAppointments = medicalAppointments;
        
    }

}