import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'on-boarding',
    loadChildren: () => import('./pages/on-boarding/on-boarding.module')
      .then(m => m.OnBoardingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: 'states',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/state/state.module')
      .then(m => m.StateModule)
  },
  {
    path: 'cases',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/case/case.module')
      .then(m => m.CaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
