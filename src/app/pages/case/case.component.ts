import { Component, OnInit } from '@angular/core';
import { CaseService } from './case.service';
import { Subscription } from 'rxjs';
import { ICase } from 'src/app/interfaces/case';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { DialogService } from 'src/app/shared/service/dialog.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  totalCases: number = 0;
  cases: ICase[] = [];

  casesPerPage = 8;
  pageSizeOptions = [8];
  currentPage = 1;


  caseSub: Subscription;

  constructor(
    private caseService: CaseService,
    private dialogService: DialogService,
  ) { }

  onDeleteDialog(caseId: string) {
    this.dialogService.caseDeleteDialog(caseId);
  }


  onSearch(form: NgForm) {

  }


  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.casesPerPage = pageData.pageSize;
    this.caseService.getCases(this.casesPerPage, this.currentPage);
  }



  initContent() {
    this.caseService.getCases();
    this.caseSub = this.caseService.getCasesUpdateListener()
      .subscribe(casesData => {
        this.totalCases = casesData.totalCases;
        this.cases = casesData.cases;
      });

  }

  ngOnInit(): void {
    this.initContent();
  }

}
