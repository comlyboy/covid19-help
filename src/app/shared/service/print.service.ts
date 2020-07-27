import { Injectable } from '@angular/core';

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

import { generateDate } from '../../util/dateGenerator';
import { ICase } from '../../interfaces/case';

@Injectable({
  providedIn: 'root'
})
export class PrintService {


  constructor(
    private exportAsService: ExportAsService
  ) { }


  printPageAsImage(printId: string, casse?: ICase) {
    const { firstname, surname, caseId } = casse;
    const exportAsConfig: ExportAsConfig = {
      type: 'png', // the type you want to download
      elementId: printId, // the id of html/table element
    };

    // download the file using old school javascript method
    this.exportAsService.save(exportAsConfig, `${firstname}_${surname}_${caseId.toLowerCase()}_case_export_`)
      .subscribe();
  }


  printPageAsPDF(printId: string, casse?: ICase) {
    const { firstname, surname, caseId } = casse;
    const exportAsConfig: ExportAsConfig = {
      type: 'pdf', // the type you want to download
      elementId: printId, // the id of html/table element
    };

    // download the file using old school javascript method
    this.exportAsService.save(exportAsConfig, `${firstname}_${surname}_${caseId.toLowerCase()}_case_export_`)
      .subscribe();

  }



}
