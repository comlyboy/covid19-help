export interface ICase {
    firstname: string;
    surname: string;
    phoneNumber: string;
    dateOfBirth: any;
    state: string;
    lga: string;
    address: string;
    status: number; // 0 = fake, 1 = new, 2 = Is Contacted, 3 = Is Confirmed, 4 = Is Quanrantined
    symtoms: string;
    addedAt: string;
    caseId: string;
}