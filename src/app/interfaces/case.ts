export interface ICase {
    id?: string;
    _id?: string;
    firstname: string;
    surname: string;
    phoneNumber: string;
    state: string;
    lga: string;
    dateOfBirth: string;
    address: string;
    symptoms: string;
    status?: number; // 0 = fake, 1 = new, 2 = Is Contacted, 3 = Is Confirmed, 4 = Is Quanrantined
    registeredAt?: string;
    caseId?: string;
}
