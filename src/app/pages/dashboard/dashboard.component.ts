import { Component, OnInit } from '@angular/core';
import { ICase } from 'src/app/interfaces/case';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cases: ICase[] = [];
  totalCases: number = 0;
  totalNewCases: number = 0;
  totalContacted: number = 0;
  totalConfirmed: number = 0;
  totalQuanrantined: number = 0;
  totalFake: number = 0;

  constructor(
    private dashboardService: DashboardService
  ) { }


  initContent() {
    this.dashboardService.getMetrics()
      .subscribe((caseData) => {
        this.cases = caseData.cases;
        this.totalCases = caseData.totalCases;
        this.totalNewCases = caseData.totalNewCases;
        this.totalContacted = caseData.totalContacted;
        this.totalConfirmed = caseData.totalConfirmed;
        this.totalQuanrantined = caseData.totalQuanrantined;
        this.totalFake = caseData.totalFake;
      });
  }

  ngOnInit(): void {
    this.initContent();
  }

}
