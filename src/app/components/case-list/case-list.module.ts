import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseListRoutingModule } from './case-list-routing.module';
import { CaseListComponent } from './case-list.component';
import { AngularMaterialModule } from '../../shared/module/material.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [CaseListComponent],
  imports: [
    CommonModule,
    CaseListRoutingModule,
    AngularMaterialModule,
    PipesModule
  ],
  exports: [CaseListComponent]
})
export class CaseListModule { }
