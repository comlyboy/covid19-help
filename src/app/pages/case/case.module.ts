import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { AngularMaterialModule } from '../../shared/module/material.module';
import { PipesModule } from '../../pipes/pipes.module';

import { ExportAsModule } from 'ngx-export-as';
import { CaseListModule } from '../../components/case-list/case-list.module';

@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    CaseRoutingModule,
    AngularMaterialModule,
    PipesModule,
    ExportAsModule,
    CaseListModule
  ]
})
export class CaseModule { }
