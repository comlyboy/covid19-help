import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NavigationService } from 'src/app/shared/service/navigation.service';
import { StateService } from '../state/state.service';
import { IState } from 'src/app/interfaces/state';
import _ from "underscore";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  viewMode = 'login';
  private isAuthenticated = false;
  branchSub: Subscription;
  branches: any[] = [];
  states: IState[] = [];


  constructor(
    public authService: AuthService,
    public stateService: StateService,
    private navigationService: NavigationService,
  ) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.loginUser
      (
        form.value.inputUserName,
        form.value.inputPassword
      );
  };

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.createUser(
      form.value.inputUserName,
      form.value.inputState,
      form.value.inputPassword,
    );
    // this.viewMode = "login"
  };

  onForgetPassword(form: NgForm) {
    // this.authService.createUser(

    //   form.value.inputPhoneNumber

    // );
  };


  initContents() {
    this.isAuthenticated = this.authService.getIsAuthenticated()
    if (this.isAuthenticated) {
      this.navigationService.goDashboard();
    };


    this.stateService.getStates()
      .subscribe(stateData => {
        let sorted = _.sortBy(stateData, 'state');
        this.states = sorted;
      });


  };


  ngOnInit() {
    this.initContents()
  }

}
