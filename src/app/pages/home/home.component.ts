import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import _ from "underscore";

import { IState } from '../../interfaces/state';

import { StateService } from '../state/state.service';
import { AuthService } from '../auth/auth.service';
import { NavigationService } from '../../shared/service/navigation.service';
import { NotificationService } from '../../shared/service/notification.service';

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
    private notificationService: NotificationService
  ) { }




  onSubmitQuestionaire(form: NgForm) {

    this.questionareCalculation
      (
        form.value.isFever,
        form.value.isCough,
        form.value.isBlockedNose,
        form.value.isTired,
        form.value.isDifficultBreathing,
        form.value.isGotoCountry,
        form.value.isDirectContact
      );

  }


  questionareCalculation(
    fever: boolean,
    cough: boolean,
    blockedNose: boolean,
    feelingTired: boolean,
    difficultBreathing: boolean,
    goneCountry: boolean,
    directContact: boolean
  ) {
    let totalPoint = 20;
    let isFever = 0;
    let isCough = 0;
    let isBlockedNose = 0;
    let isTired = 0;
    let isDifficultBreathing = 0;
    let isGotoCountry = 0;
    let isDirectContact = 0;
    let sum = 0;


    if (fever) {
      isFever = 2
    }
    if (cough) {
      isCough = 2
    }
    if (blockedNose) {
      isBlockedNose = 2
    }
    if (feelingTired) {
      isTired = 2
    }
    if (difficultBreathing) {
      isDifficultBreathing = 4
    }
    if (goneCountry) {
      isGotoCountry = 4
    }
    if (directContact) {
      isDirectContact = 4
    }
    sum = isFever + isCough + isBlockedNose + isTired + isDifficultBreathing + isGotoCountry + isDirectContact;

    let result = sum / totalPoint * 100

    this.notificationService.smallSuccess(`${result}%`);
    if (result >= 50) {
      this.notificationService.infected('You might have contacted COVID-19');
      this.navigationService.goToOn_boarding();
    } else {
      this.notificationService.notInfected('Goodnews!!!');
    }
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
