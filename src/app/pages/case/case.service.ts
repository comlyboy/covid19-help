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



  constructor(
    private http: HttpClient,
    public notificationService: NotificationService,
    public navigationService: NavigationService
  ) { }

  private API_URL = environment;
  private cases: ICase[] = [];
  casse: ICase;

  // ===========
  private casesUpdated = new Subject<{
    cases: ICase[],
    totalCases: number
  }>();


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
      .subscribe(responseData => {
        this.notificationService.success(`Success!!!`);
        console.log(responseData);
        // responseData = this.casse;
      }, error => {
        console.log(error.message);
      });
  }


  getInputCase(phoneNumber: string) {
    return this.http.get<ICase>(`${this.API_URL._SERVER}case/verify/${phoneNumber}`);
  }

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
  }


  getCaseDetails(caseId: string) {
    return this.http.get<ICase>(`${this.API_URL._SERVER}case/${caseId}`);
  }


  deleteCase(caseId: string) {
    return this.http.delete(`${this.API_URL._SERVER}case/${caseId}`);

  }


  changeCaseStatus(caseId: string, status: number) {
    this.http
      .put(
        `${this.API_URL._SERVER}case_status/${caseId}`,
        {
          status
        }
      ).subscribe((result: { message: string }) => {
        this.notificationService.successMat(result.message);
        this.getCases(10, 1);
      });
  }

}
