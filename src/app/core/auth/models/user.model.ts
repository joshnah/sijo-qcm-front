export interface User {
    login: string;
    token: string;
    role: Role
}


export enum Role {
    STUDENT, TUTOR, ADMIN
}