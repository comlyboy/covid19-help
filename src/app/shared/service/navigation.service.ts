import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
  ) { }

  goToAuth() {
    this.router.navigate(["/auth"]);
  };

  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  };

  goToCases() {
    this.router.navigate(["/cases"]);
  };

  goToStates() {
    this.router.navigate(["/states"]);
  };

};
