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


  private StatesUpdated = new Subject<{
    states: IState[];
  }>();

  getStatesUpdateListener() {
    return this.StatesUpdated.asObservable();
  }

  getStates() {
    this.http
      .get<{ states: IState[] }>(
        this.API_URL)
      .subscribe(stateData => {
        console.log(stateData)
        this.states = stateData.states;
        this.StatesUpdated.next({
          states: [...this.states]
        });
      });
  }
}
