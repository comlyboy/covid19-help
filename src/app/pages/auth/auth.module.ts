import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AngularMaterialModule } from 'src/app/shared/module/material.module';


@NgModule({
  declarations: [AuthComponent],
  exports: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AngularMaterialModule
  ]
})
export class AuthModule { }
