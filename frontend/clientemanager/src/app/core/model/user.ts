
export enum Role {
    ADMIN = 'ROLE_ADMIN',
    COMUM = 'ROLE_COMUM',
    USER = 'USER',
    USER_MANAGER = 'USER_MANAGER'
}

export class User {

    id: number;
    email: string;
    role: Role;
    //minGleePerDay: number;

    constructor(data: any = null) {
        if (data) {
            this.id = Number(data.id);
            this.email = String(data.email);
            this.role = Role[String(data.role)];
            //this.minGleePerDay = Number(data.minGleePerDay);
        }
    }
}
