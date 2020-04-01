import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';


import { environment } from '../../../environments/environment';
import { IState } from '../../interfaces/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private API_URL = environment;

  states: IState[] = [];

  constructor(
    private http: HttpClient
  ) { }



  getStates() {
    return this.http
      .get<IState[]>(`${this.API_URL._STATE}lgas`);
  }

  getStateLGA(stateId: string) {
    return this.http
      .get<any[]>(`${this.API_URL._STATE}states/${stateId}/lgas`);
  }



}
