import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser, ISignup, ILogin } from 'src/app/interfaces/user';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { StorageService } from 'src/app/shared/service/storage.service';
import { NavigationService } from 'src/app/shared/service/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment;
  user: IUser
  private token: string;

  private isAuthenticated = false;

  private authenticationStatusListener = new Subject<boolean>();


  constructor(
    private http: HttpClient,
    private navigationService: NavigationService,
    public notificationService: NotificationService,
    private storageService: StorageService
  ) { }

  // listening for authentication status
  getAuthenticationStatusListener() {
    return this.authenticationStatusListener.asObservable();
  }

  // user authentication token
  getToken() {
    return this.token;
  }

  // getting if user is authenticated
  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  // Adding new user
  createUser(userName: string, state: string, password: string) {
    const signupData: ISignup = {
      _id: null,
      userName: userName,
      state: state,
      password: password,
    };

    this.http.post(`${this.API_URL}user/signup`, signupData)
      .subscribe(response => {
        this.notificationService.success('Registered successfully');
      }, error => {
        console.log(error)
      });
  }


  // logging in existing user
  loginUser(userName: string, password: string) {
    const loginData: ILogin = {
      userName: userName,
      password: password
    };

    this.http.post<{ token: string, user: IUser }>(`${this.API_URL._SERVER}user/login`, loginData)
      .subscribe(response => {
        const _user = response.user;
        const _token = response.token;
        const isAdmin = response.user.isAdmin;
        this.token = _token;
        this.user = _user;

        // // if (role !== "admin") {
        // //   return this.notificationsService.wrongUser("You are not an admin");
        // // };
        if (!_token) {
          return;
        }
        this.isAuthenticated = true;
        this.authenticationStatusListener.next(true);
        this.saveAuthenticationData(_token, _user);
        this.notificationService.success(`Welcome ${response.user.userName}`);
        this.navigationService.goToDashboard();
      }, error => {
        console.log(error.message)
        this.authenticationStatusListener.next(false);
      });
  }

  // Logging user out
  logout() {
    this.token = null;
    this.user = null;
    this.isAuthenticated = false;
    this.authenticationStatusListener.next(false);
    this.clearAuthenticationData();
    this.navigationService.goToAuth();
  }

  // this saves the authentication datas to the browser
  private saveAuthenticationData(token: string, user: IUser) {
    this.storageService.saveAuthData(token, user);
  }

  // this gets the user authentication data
  private getAuthenticationData() {
    let authData = this.storageService.getAuthData()
    const token = authData.token;
    return { token };
  }

  // persists user authentication automatically
  automaticAuthenticateUser() {
    const authenticationInformation = this.getAuthenticationData();
    let token_ = authenticationInformation.token;

    if (!token_) {
      return;
    }

    this.token = authenticationInformation.token;
    this.isAuthenticated = true;
    this.authenticationStatusListener.next(true);
  }


  // this removes authentication data from the browser
  // this is called during logout
  private clearAuthenticationData() {
    this.storageService.removeAuthData();
  }

}
