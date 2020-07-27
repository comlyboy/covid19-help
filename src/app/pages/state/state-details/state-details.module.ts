import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateDetailsRoutingModule } from './state-details-routing.module';
import { StateDetailsComponent } from './state-details.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { AngularMaterialModule } from '../../../shared/module/material.module';
import { CaseListModule } from '../../../components/case-list/case-list.module';


@NgModule({
  declarations: [StateDetailsComponent],
  imports: [
    CommonModule,
    PipesModule,
    StateDetailsRoutingModule,
    AngularMaterialModule,
    CaseListModule
  ]
})
export class StateDetailsModule { }
