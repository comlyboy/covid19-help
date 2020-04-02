import { Component, OnInit } from '@angular/core';

import { IState } from '../../interfaces/state';

import { StateService } from './state.service';
import _ from "underscore";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  states: IState[] = [];
  totalStates: number = 0;

  constructor(
    private stateService: StateService
  ) { };


  initContents() {
    this.stateService.getStates()
      .subscribe(stateData => {
        let sorted = _.sortBy(stateData, 'state');
        this.states = sorted;
        this.totalStates = this.states.length;
      });
  };


  ngOnInit() {
    this.initContents();
  };


}
