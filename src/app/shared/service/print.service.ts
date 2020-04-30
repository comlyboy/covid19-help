import { Injectable } from '@angular/core';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { generateDate } from 'src/app/util/dateGenerator';
generateDate
@Injectable({
  providedIn: 'root'
})
export class PrintService {


  constructor(
    private exportAsService: ExportAsService
  ) { }


  printPageImage(printId: string) {
    const exportAsConfig: ExportAsConfig = {
      type: 'png', // the type you want to download
      elementId: printId, // the id of html/table element
    };

    // download the file using old school javascript method
    this.exportAsService.save(exportAsConfig, `case_export_${generateDate()}`)
      .subscribe(() => {
      });
  }


  printPagePDF(printId: string) {
    const exportAsConfig: ExportAsConfig = {
      type: 'pdf', // the type you want to download
      elementId: printId, // the id of html/table element
    };

    // download the file using old school javascript method
    this.exportAsService.save(exportAsConfig, `case_export_${generateDate()}`)
      .subscribe(() => {
      });

  }



}
