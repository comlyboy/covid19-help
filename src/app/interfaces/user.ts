export interface IUser {
    _id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    phoneNumber: string;
    email: string;
    address: string;
    position: string;
    branch: string;
    password: string;
    role: string;
    registeredAt: Date;
    isActive: boolean;
    isVerified: boolean;
}


export interface ISignup {
    _id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    phoneNumber: string;
    branch: string;
    password: string
}


export interface ILogin {
    _id?: string;
    userName: string;
    password: string
}