import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseDetailsRoutingModule } from './case-details-routing.module';
import { CaseDetailsComponent } from './case-details.component';
import { AngularMaterialModule } from 'src/app/shared/module/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [CaseDetailsComponent],
  imports: [
    CommonModule,
    CaseDetailsRoutingModule,
    AngularMaterialModule,
    PipesModule
  ]
})
export class CaseDetailsModule { }
