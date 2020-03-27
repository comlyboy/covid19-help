import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { IState } from '../../interfaces/state';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  states: IState[] = [];
  stateSub: Subscription;

  constructor(
    private stateService: StateService
  ) { }


  onSubmitCase(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // this.branchService.addBranch
    //   (
    //     form.value.inputName,
    //     form.value.inputDescription
    //   );

  }

  initContents() {
    this.stateService.getStates();
    this.stateSub = this.stateService.getStatesUpdateListener()
      .subscribe((stateData: { states: IState[] }) => {
        this.states = stateData.states;
      });

  };

  ngOnInit() {
    this.initContents();
  }

  ngOnDestroy() {
    this.stateSub.unsubscribe;
  }

}
