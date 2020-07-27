import { Component, OnInit, Input } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

import { ICase } from 'src/app/interfaces/case';
import { CaseService } from '../../pages/case/case.service';
import { DialogService } from '../../shared/service/dialog.service';
import { PrintService } from '../../shared/service/print.service';
import { definedStatus } from '../../shared/helper/status';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {
  @Input() cases: ICase[] = [];
  isDesktopView = true;
  case: ICase;
  statusData = definedStatus;


  constructor(
    private caseService: CaseService,
    private dialogService: DialogService,
    private deviceService: DeviceDetectorService,
    private modalService: ModalService,
  ) {
    this.isDesktopView = this.deviceService.isDesktop();
  }


  onDeleteDialog(caseId: string) {
    this.dialogService.caseDeleteDialog(caseId);
  }

  onCaseDetails(caseId: string) {
    // tslint:disable-next-line: variable-name
    const case_ = this.cases.find((item) => item._id === caseId);
    this.modalService.openCaseDetailsSheet(case_);
  }

  changeStatus(caseId: string, status: number) {
    this.caseService.changeCaseStatus(caseId, status);
  }


  ngOnInit(): void {
  }

}
