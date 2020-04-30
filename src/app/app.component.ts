import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from './pages/auth/auth.service';
import { StorageService } from './shared/service/storage.service';
import { IState } from './interfaces/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NCDC-help';

  userIsAuthenticated = false;

  private authStatusListenerSub: Subscription;


  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {
  }


  onLogout() {
    this.authService.logout();
  }


  initContents() {
    this.authService.automaticAuthenticateUser();
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authStatusListenerSub = this.authService.getAuthenticationStatusListener()
      .subscribe((isAuthenticated: boolean) => {
        this.userIsAuthenticated = isAuthenticated;
      });

  }

  initStateLGA() {
    const data: IState = this.storageService.getStateLGA();
    if (!data) {
      this.storageService.saveJSON();
    }
    // console.log(data);
    // const d = data.map((item) => item.state);
    // console.log(d);

  }

  ngOnInit() {
    this.initContents();
    this.initStateLGA();
  }

}
