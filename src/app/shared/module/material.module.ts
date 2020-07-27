import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatRippleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule,
        MatSnackBarModule
    ],
})

export class AngularMaterialModule { }
