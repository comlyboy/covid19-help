import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,

  ) { }

  goAuth() {
    this.router.navigate(["/auth"]);
  };

  goDashboard() {
    this.router.navigate(["/dashboard"]);
  };

  goBranch() {
    this.router.navigate(["/branches"]);
  };

  goCustomer() {
    this.router.navigate(["/customers"]);
  };

  goEngineer() {
    this.router.navigate(["/engineers"]);
  };

  goReport() {
    this.router.navigate(["/report"]);
  };




}
