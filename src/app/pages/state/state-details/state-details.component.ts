import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/interfaces/state';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StateService } from '../state.service';
import { ICase } from 'src/app/interfaces/case';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/shared/service/dialog.service';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.scss']
})
export class StateDetailsComponent implements OnInit {
  state: IState;
  stateId: string;

  cases: ICase[] = [];
  totalCases: number = 0;
  totalNewCases: number = 0;
  totalContacted: number = 0;
  totalConfirmed: number = 0;
  totalQuanrantined: number = 0;
  totalFake: number = 0;


  stateSub: Subscription;

  constructor(
    private stateService: StateService,
    private dialogService: DialogService,
    public route: ActivatedRoute
  ) { }


  onDeleteDialog(caseId: string) {
    this.dialogService.caseDeleteDialog(caseId);
  };

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
