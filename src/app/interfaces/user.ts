export interface IUser {
    _id?: string
    userName: string;
    password: string;
    state: string;
    isAdmin?: boolean;
}


export interface ISignup {
    _id?: string;
    userName: string;
    state: string
    password: string
}


export interface ILogin {
    _id?: string;
    userName: string;
    password: string
}