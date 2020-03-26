import { NgModule } from '@angular/core';
import { TimesAgoPipe } from './times-ago.pipe';
import { StatusPipe } from './status.pipe';



@NgModule({
  declarations: [
    TimesAgoPipe,
    StatusPipe
  ],
  exports: [
    TimesAgoPipe,
    StatusPipe
  ]
})
export class PipesModule { }
