
export class AppointmentDTO{

    private id! : number;
    private clientId: number = 0;
    private doctorId : number = 0;
    private date  = new Date();

    constructor(id? : number, clientId? : number, doctorId? : number, date? : Date){

        if(id !== null && id !== undefined && id !== 0)  this.id = id;
        if(clientId !== null && clientId !== undefined) this.clientId = clientId;
        if(doctorId !== null && doctorId !== undefined) this.doctorId = doctorId;
        if(date !== null && date !== undefined) this.date = date;
        
    }

    public setId(id : number): void {
        this.id    =  id;
    }
    public getId(): number {
        return this.id;
    }
    public setClientId(userId: number): void {
        this.clientId = userId;
    }
    public getClientId(): number {
        return this.clientId;
    }
    public setDoctorId(doctorId: number): void {
        this.doctorId = doctorId;
    }
    public getDoctorId(): number {
        return this.doctorId;
    }
    public setDate(date: Date): void {
        this.date = date;
    }
    public getDate(): Date {
        return this.date;
    }
}