import { NgModule } from '@angular/core';
import { TimesAgoPipe } from './times-ago.pipe';
import { StatusPipe } from './status.pipe';
import { AgePipe } from './age.pipe';
import { StatePipe } from './state.pipe';



@NgModule({
  declarations: [
    TimesAgoPipe,
    StatusPipe,
    AgePipe,
    StatePipe
  ],
  exports: [
    TimesAgoPipe,
    StatusPipe,
    AgePipe,
    StatePipe
  ]
})
export class PipesModule { }
