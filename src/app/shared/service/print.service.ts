import { Injectable } from '@angular/core';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  printDate = (new Date()).toString().split(' ').splice(1, 3).join('_');
  printTime = new Date().getTime();

  constructor(
    private exportAsService: ExportAsService
  ) { }


  printPageImage(printId: string) {
    const exportAsConfig: ExportAsConfig = {
      type: 'png', // the type you want to download
      elementId: printId, // the id of html/table element
    };

    // download the file using old school javascript method
    this.exportAsService.save(exportAsConfig, `case_export_${this.printDate}`)
      .subscribe(() => {
      });
  }


  printPagePDF(printId: string) {
    const exportAsConfig: ExportAsConfig = {
      type: 'pdf', // the type you want to download
      elementId: printId, // the id of html/table element
    };

    // download the file using old school javascript method
    this.exportAsService.save(exportAsConfig, `case_export_${this.printDate}`)
      .subscribe(() => {
      });

  }



}
