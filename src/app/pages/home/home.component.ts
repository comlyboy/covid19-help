import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import _ from "underscore";


import { IState } from '../../interfaces/state';
import { StateService } from '../state/state.service';
import { CaseService } from '../case/case.service';
import { AuthService } from '../auth/auth.service';
import { NavigationService } from 'src/app/shared/service/navigation.service';

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
  isAuthenticated: boolean;

  constructor(
    public authService: AuthService,
    private stateService: StateService,
    private navigationService: NavigationService,
    private caseService: CaseService
  ) { }



  onSubmitQuestionaire(form: NgForm) {
    const pre = "+234"
    if (form.invalid) {
      return;
    }

    console.log(form.value.isCough)
    // this.caseService.addCase
    //   (
    //     form.value.inputFirstname,
    //     form.value.inputSurname,
    //     pre + form.value.inputPhoneNumber,
    //     form.value.inputStateName,
    //     form.value.inputLGA,
    //     form.value.inputDOB,
    //     form.value.inputAddress,
    //     form.value.inputSymptoms
    //   );

  }

  initContents() {
    this.isAuthenticated = this.authService.getIsAuthenticated()
    if (this.isAuthenticated) {
      this.navigationService.goToDashboard();
    };


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
