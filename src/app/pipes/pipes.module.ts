import { NgModule } from '@angular/core';
import { TimesAgoPipe } from './times-ago.pipe';
import { StatusPipe } from './status.pipe';
import { AgePipe } from './age.pipe';



@NgModule({
  declarations: [
    TimesAgoPipe,
    StatusPipe,
    AgePipe
  ],
  exports: [
    TimesAgoPipe,
    StatusPipe,
    AgePipe
  ]
})
export class PipesModule { }
