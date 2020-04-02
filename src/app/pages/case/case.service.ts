import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

import { ICase } from '../../interfaces/case';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { Subject } from 'rxjs';
import { NavigationService } from 'src/app/shared/service/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  private API_URL = environment;
  cases: ICase[] = [];



  constructor(
    private http: HttpClient,
    public notificationService: NotificationService,
    public navigationService: NavigationService,
  ) { }


  addCase(
    firstname: string,
    surname: string,
    phoneNumber: string,
    state: string,
    lga: string,
    dateOfBirth: any,
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


    this.http.post(`${this.API_URL._SERVER}case`, caseData)
      .subscribe(response => {
        this.notificationService.success(`Success!!!`);
      }, error => {
        console.log(error.message)
      });
  };



  // ===========

  private casesUpdated = new Subject<{
    cases: ICase[],
    totalCases: number
  }>();

  getCasesUpdateListener() {
    return this.casesUpdated.asObservable();
  }

  getCases(casesPerPage?: number, currentPage?: number) {
    const queryParameter = `?pagesize=${casesPerPage}&page=${currentPage}`;

    this.http
      .get<{
        cases: ICase[];
        totalCases: number
      }>(`${this.API_URL._SERVER}case${queryParameter}`)
      .subscribe(casesData => {
        this.cases = casesData.cases;
        this.casesUpdated.next({
          cases: [...this.cases],
          totalCases: casesData.totalCases
        });
      });
  };


  getCaseDetails(caseId: string) {
    return this.http.get<ICase>(`${this.API_URL._SERVER}case/${caseId}`)
  }


  deleteCase(caseId: string) {
    return this.http.delete(`${this.API_URL._SERVER}case/${caseId}`);

  }

}
