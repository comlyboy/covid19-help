import { Component, OnInit, Inject, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { ICase } from '../../../interfaces/case';
import { PrintService } from '../../../shared/service/print.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit, OnDestroy {
  printMode = false;
  printDateTime: string | number = null;

  case = this.data;

  constructor(
    private readonly bottomSheetRef: MatBottomSheetRef,
    private readonly printService: PrintService,
    @Inject(MAT_BOTTOM_SHEET_DATA) private readonly data: ICase,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) { }

  onCloseBottomSheet(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onFooterMode() {
    this.printMode = !this.printMode;
    this.printDateTime = null;
  }

  onPrintIMG(classId: string) {
    this.printDateTime = Date.now();
    setTimeout(() => {
      this.printService.printPageAsImage(classId, this.case);
      this.onFooterMode();
      this.changeDetectorRef.detectChanges();

    }, 500);
  }

  onPrintPDF(classId: string) {
    this.printDateTime = Date.now();
    setTimeout(() => {
      this.printService.printPageAsPDF(classId, this.case);
      this.onFooterMode();
      this.changeDetectorRef.detectChanges();
    }, 500);

  }


  initContents() {
    if (this.case) {
      this.changeDetectorRef.detectChanges();
    }

  }

  ngOnInit(): void {
    this.initContents();
  }

  ngOnDestroy(): void {
    this.case = null;
  }

}
