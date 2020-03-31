import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from './pages/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NCDC-help';

  userIsAuthenticated: boolean = false;
  _opened: boolean = true;

  
  private authStatusListenerSub: Subscription;

  constructor(
    private authService: AuthService,
  ) {
  };


  _toggleSidebar() {
    this._opened = !this._opened;
  };


  onLogout() {
    this.authService.logout();
  };


  initContents() {
    this.authService.automaticAuthenticateUser();
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authStatusListenerSub = this.authService.getAuthenticationStatusListener()
      .subscribe((isAuthenticated: boolean) => {
        this.userIsAuthenticated = isAuthenticated;
      });

  };

  ngOnInit() {
    this.initContents();
  };

}
