import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { environment } from '../../../environments/environment';

import { IState } from '../../interfaces/state';
import { ICase } from 'src/app/interfaces/case';
import { IStateMetrics } from 'src/app/interfaces/metric';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { StorageService } from 'src/app/shared/service/storage.service';
import _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private API_URL = environment;

  states: IState[] = [];
  cases: ICase[] = [];

  constructor(
    private http: HttpClient,
    public notificationService: NotificationService,
    private storageService: StorageService
  ) { }


  // getState() {
  //   this.http
  //     .get<IState[]>(`${this.API_URL._STATE_2}states`)
  //     .subscribe(stateData => {
  //       console.log(stateData);

  //     });

  // }


  getStates() {
    const data = this.storageService.getStateLGA();
    return _.sortBy(data, 'state');
  }

  getStateLGA(stateId: string) {
    const data = this.storageService.getStateLGA();
    return _.sortBy(data, 'state');

  };


  getStateDetails(stateId: string) {
  return this.storageService.getStateLGA();

  
  };


  // ===========

  private stateCasesUpdated = new Subject<IStateMetrics>();

  getStateCasesUpdateListener() {
    return this.stateCasesUpdated.asObservable();
  }

  getStateCases(stateId: string) {
    this.http
      .get<IStateMetrics>(`${this.API_URL._SERVER}case_by_state/${stateId}`)
      .subscribe(casesData => {
        this.cases = casesData.cases;
        this.stateCasesUpdated.next({
          cases: [...this.cases],
          totalCases: casesData.totalCases,
          totalNewCases: casesData.totalNewCases,
          totalContacted: casesData.totalContacted,
          totalConfirmed: casesData.totalConfirmed,
          totalQuanrantined: casesData.totalQuanrantined,
          totalFake: casesData.totalFake
        });
      });;
  };


  changeCaseStatus(caseId: string, status: number) {
    this.http
      .put(
        `${this.API_URL._SERVER}case_status/${caseId}`,
        {
          status
        }
      ).subscribe((result: { message: string }) => {
        this.notificationService.smallSuccess(result.message);
      });
  };
}
