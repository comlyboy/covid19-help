import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import _ from "underscore";


import { IState } from '../../interfaces/state';
import { StateService } from '../state/state.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  states: IState[] = [];
  stateSub: Subscription;
  LGAs: any[];

  constructor(
    private stateService: StateService,
    private homeService: HomeService
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
    // if (form.invalid) {
    //   return;
    // }

    this.homeService.addCase
      (
        form.value.inputFirstname,
        form.value.inputSurname,
        form.value.inputPhoneNumber,
        form.value.inputStateName,
        form.value.inputDOB,
        form.value.inputLGA,
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

  ngOnDestroy() {
    this.stateSub.unsubscribe;
  }

}
