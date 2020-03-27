import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';


import { environment } from 'src/environments/environment';
import { IState } from 'src/app/interfaces/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private API_URL = environment.API_URL;

  states: IState[] = [];

  constructor(
    private http: HttpClient
  ) { }



  getStates() {
    return this.http
      .get<IState[]>(`${this.API_URL}lgas`);
  }

  getStateLGA(stateId: string) {
    return this.http
      .get<any[]>(`${this.API_URL}states/${stateId}/lgas`);
  }



}
