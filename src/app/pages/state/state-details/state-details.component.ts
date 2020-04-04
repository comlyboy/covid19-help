import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from 'rxjs';

import { StateService } from '../state.service';
import { ICase } from '../../../interfaces/case';
import { IState } from '../../../interfaces/state';
import { CaseService } from '../../case/case.service';
import { DialogService } from '../../../shared/service/dialog.service';
import { definedStatus } from '../../../shared/helper/status';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.scss']
})
export class StateDetailsComponent implements OnInit {
  statusData = definedStatus;

  state: IState;
  stateId: string;

  cases: ICase[] = [];
  case: ICase;

  totalCases: number = 0;
  totalNewCases: number = 0;
  totalContacted: number = 0;
  totalConfirmed: number = 0;
  totalQuanrantined: number = 0;
  totalFake: number = 0;

  stateSub: Subscription;

  constructor(
    private stateService: StateService,
    private caseService: CaseService,
    private dialogService: DialogService,
    public route: ActivatedRoute
  ) { }


  onDeleteDialog(caseId: string) {
    this.dialogService.caseDeleteDialog(caseId);
  };

  onCloseModal() {
    this.case = null;
  };


  onCaseDetails(caseId: string) {
    this.caseService.getCaseDetails(caseId)
      .subscribe(casesDetailsData => {
        this.case = casesDetailsData;
      });
  }

  changeStatus(caseId: string, status: number) {
    this.caseService.changeCaseStatus(caseId, status);
  }




  initContents() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.stateId = paramMap.get('stateId');
      this.stateService.getStateDetails(this.stateId)
        .subscribe((stateData) => {
          this.state = stateData;
        });

      this.stateService.getStateCases(this.stateId);
      this.stateSub = this.stateService.getStateCasesUpdateListener()
        .subscribe((caseData) => {
          this.cases = caseData.cases;
          this.totalCases = caseData.totalCases;
          this.totalNewCases = caseData.totalNewCases;
          this.totalContacted = caseData.totalContacted;
          this.totalConfirmed = caseData.totalConfirmed;
          this.totalQuanrantined = caseData.totalQuanrantined;
          this.totalFake = caseData.totalFake;
        });
    });
  }


  ngOnInit() {
    this.initContents()
  }

}
