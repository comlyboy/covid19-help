import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/interfaces/state';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { StateService } from '../state/state.service';
import { NavigationService } from 'src/app/shared/service/navigation.service';
import { CaseService } from '../case/case.service';
import { NgForm } from '@angular/forms';
import _ from 'underscore';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss']
})
export class OnBoardingComponent implements OnInit {
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
    const pre = "+234"
    if (form.invalid) {
      return;
    }

    this.caseService.addCase
      (
        form.value.inputFirstname,
        form.value.inputSurname,
        pre + form.value.inputPhoneNumber,
        form.value.inputStateName,
        form.value.inputLGA,
        form.value.inputDOB,
        form.value.inputAddress,
        form.value.inputSymptoms
      );

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
