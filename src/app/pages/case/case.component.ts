import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

import { Subscription } from 'rxjs';

import { definedStatus } from '../../shared/helper/status';

import { CaseService } from './case.service';
import { ICase } from '../../interfaces/case';
import { DialogService } from '../../shared/service/dialog.service';
import { PrintService } from 'src/app/shared/service/print.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  printMode = false;
  printDateTime: string | number = null;

  statusData = definedStatus;

  totalCases = 0;
  case: ICase;
  cases: ICase[] = [];

  casesPerPage = 10;
  pageSizeOptions = [10];
  currentPage = 1;

  caseSub: Subscription;

  constructor(
    private caseService: CaseService,
    private dialogService: DialogService,
    private printService: PrintService
  ) { }


  onFooterMode() {
    this.printMode = !this.printMode;
  }


  onDeleteDialog(caseId: string) {
    this.dialogService.caseDeleteDialog(caseId);
  }


  onSearch(form: NgForm) {

  }

  onCloseModal() {
    this.case = null;
  }


  onCaseDetails(caseId: string) {
    this.caseService.getCaseDetails(caseId)
      .subscribe(casesDetailsData => {
        this.case = casesDetailsData;
      });
  }

  changeStatus(caseId: string, status: number) {
    this.caseService.changeCaseStatus(caseId, status);
  }


  onPrintIMG(classId: string) {
    this.printDateTime = Date.now();
    setTimeout(() => {
      this.printService.printPageImage(classId);
    }, 500);
    setTimeout(() => {
      this.printMode = false;
      this.printDateTime = null;
    }, 5000);
  }

  onPrintPDF(classId: string) {
    this.printDateTime = Date.now();
    setTimeout(() => {
      this.printService.printPagePDF(classId);
    }, 500);
    setTimeout(() => {
      this.printMode = false;
      this.printDateTime = null;
    }, 5000);
  }



  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.casesPerPage = pageData.pageSize;
    this.caseService.getCases(this.casesPerPage, this.currentPage);
  }


  initContent() {
    this.caseService.getCases(this.casesPerPage, this.currentPage);
    this.caseSub = this.caseService.getCasesUpdateListener()
      .subscribe(casesData => {
        this.totalCases = casesData.totalCases;
        this.cases = casesData.cases;
      });
  }

  ngOnInit(): void {
    this.initContent();

  }


  ngOndestroy() {
    this.caseSub.unsubscribe();
    this.case = null;
  }

}
