import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state.component';



const routes: Routes = [
  {
    path: '',
    component: StateComponent
  }, {
    path: ':stateId',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./state-details/state-details.module')
            .then(m => m.StateDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
