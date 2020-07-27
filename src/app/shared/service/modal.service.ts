import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { CaseDetailsComponent } from '../../pages/case/case-details/case-details.component';
import { ICase } from '../../interfaces/case';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private readonly bottomSheet: MatBottomSheet
  ) { }

  openCaseDetailsSheet(casse: ICase): void {
    this.bottomSheet.open(CaseDetailsComponent, {
      data: casse
    });
  }

}
