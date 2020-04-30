import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { AngularMaterialModule } from '../../shared/module/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    AngularMaterialModule,
    PipesModule
  ]
})
export class StateModule { }
