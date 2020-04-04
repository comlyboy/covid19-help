import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnBoardingRoutingModule } from './on-boarding-routing.module';
import { OnBoardingComponent } from './on-boarding.component';

import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/module/material.module';

@NgModule({
  declarations: [OnBoardingComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    OnBoardingRoutingModule
  ]
})
export class OnBoardingModule { }
