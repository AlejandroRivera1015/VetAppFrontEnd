


export class UserDTO{
    private id: number;
    private role: string;

    constructor(id: number, role: string) {
        this.id = id;
        this.role = role;
    }

    public getId(): number {
        return this.id;
    }
    
    public getRole(): string{
        return this.role;
    }
}