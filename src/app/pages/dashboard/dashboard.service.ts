import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IState } from 'src/app/interfaces/state';
import { IStateMetrics } from 'src/app/interfaces/metric';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private API_URL = environment;

  constructor(
    private http: HttpClient
  ) { }


  getMetrics() {
    return this.http
      .get<IStateMetrics>(`${this.API_URL._SERVER}case_metrics`);
  };


}
