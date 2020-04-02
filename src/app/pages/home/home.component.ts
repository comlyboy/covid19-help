import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import _ from "underscore";


import { IState } from '../../interfaces/state';
import { StateService } from '../state/state.service';
import { HomeService } from './home.service';
import { CaseService } from '../case/case.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  startDate = new Date(1980, 0, 1);


  states: IState[] = [];
  stateSub: Subscription;
  LGAs: any[];

  constructor(
    private stateService: StateService,
    private caseService: CaseService
  ) { }

  onSelectState(value: string) {
    if (!value) {
      return;
    };

    this.stateService.getStateLGA(value)
      .subscribe(lgas => {
        this.LGAs = lgas;
      });
  }


  onSubmitCase(form: NgForm) {
    const a = "+234"
    if (form.invalid) {
      return;
    }

    this.caseService.addCase
      (
        form.value.inputFirstname,
        form.value.inputSurname,
        a + form.value.inputPhoneNumber,
        form.value.inputStateName,
        form.value.inputLGA,
        form.value.inputDOB,
        form.value.inputAddress,
        form.value.inputSymptoms
      );

  }

  initContents() {
    this.stateService.getStates()
      .subscribe(stateData => {
        let sorted = _.sortBy(stateData, 'state');
        this.states = sorted;
      });
  };

  ngOnInit() {
    this.initContents();
  }

}
