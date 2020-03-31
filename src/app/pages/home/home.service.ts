import { Injectable } from '@angular/core';
import { ICase } from 'src/app/interfaces/case';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }


  addCase(
    firstname: string,
    surname: string,
    phoneNumber: string,
    dateOfBirth: any,
    state: string,
    lga: string,
    address: string,
    symptoms: string
  ) {
    const caseData: ICase = {
      id: null,
      firstname,
      surname,
      phoneNumber,
      state,
      lga,
      dateOfBirth,
      address,
      symptoms
    };


    console.log(caseData);
  }
}
