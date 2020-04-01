import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { CaseComponent } from './case.component';
import { AngularMaterialModule } from '../../shared/module/material.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    CaseRoutingModule,
    AngularMaterialModule,
    PipesModule
  ]
})
export class CaseModule { }
