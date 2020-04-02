import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateDetailsRoutingModule } from './state-details-routing.module';
import { StateDetailsComponent } from './state-details.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [StateDetailsComponent],
  imports: [
    CommonModule,
    PipesModule,
    StateDetailsRoutingModule
  ]
})
export class StateDetailsModule { }
