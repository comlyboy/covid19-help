import { Component, OnInit } from '@angular/core';

import { IState } from '../../interfaces/state';

import { StateService } from './state.service';
import _ from 'underscore';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  states: IState[] = [];
  totalStates = 0;

  constructor(
    private stateService: StateService
  ) { };


  initContents() {
    this.states = this.stateService.getStates();
    this.totalStates = this.states.length;
  };


  ngOnInit() {
    this.initContents();
  };


}
