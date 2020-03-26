import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

import { NavigationService } from '../../shared/service/navigation.service';
import { NotificationService } from '../../shared/service/notification.service';
import { StorageService } from '../../shared/service/storage.service';
import { IUser, ISignup, ILogin } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.API_URL;
  user: IUser
  userProfile: any;

  private userId: string;
  private isAuthenticated = false;
  private token: string;
  tokenTimer: any;

  private authenticationStatusListener = new Subject<boolean>();


  constructor(
    private http: HttpClient,
    private navigationService: NavigationService,
    public notificationsService: NotificationService,
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
  createUser(firstName: string, lastName: string, userName: string, phoneNumber: string, branch: string, password: string) {
    const signupData: ISignup = {
      _id: null,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      phoneNumber: phoneNumber,
      branch: branch,
      password: password,
    };
    this.http.post(`${this.API_URL}user/signup`, signupData)
      .subscribe(response => {
        this.notificationsService.success('Registered successfully');
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

    this.http.post<{ message: string, role: string, token: string, userId: string }>(`${this.API_URL}user/login`, loginData)
      .subscribe(response => {
        const _token = response.token;
        const role = response.role
        this.token = _token;
        if (role !== "admin") {
          return this.notificationsService.wrongUser("You are not an admin");
        }
        if (!_token) {
          return;
        }
        this.isAuthenticated = true;
        this.userId = response.userId;
        this.authenticationStatusListener.next(true);
        this.saveAuthenticationData(_token, this.userId);
        this.notificationsService.success(response.message);
        this.navigationService.goDashboard();
      }, error => {
        console.log(error.message)
        this.authenticationStatusListener.next(false);
      });
  }

  // Logging user out
  logout() {
    this.token = null;
    this.userId = null;
    this.isAuthenticated = false;
    this.authenticationStatusListener.next(false);
    this.userId = null;
    this.clearAuthenticationData();
    this.notificationsService.success('Logged out');
    this.navigationService.goAuth();
  }

  // this saves the authentication datas to the browser
  private saveAuthenticationData(token: string, userId: string) {
    this.storageService.saveAuthData(token, userId);
  }

  // this gets the user authentication data
  private getAuthenticationData() {
    // let authData;
    // await this.storageService.getAuthData()
    //   .then(document => {
    //     authData = document
    //   });

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');


    return { token, userId };
  }

  // persists user authentication automatically
  automaticAuthenticateUser() {
    const authenticationInformation = this.getAuthenticationData();
    let token_ = authenticationInformation.token;
    let userId_ = authenticationInformation.userId;
    if (!token_ || !userId_) {
      return;
    }

    this.token = authenticationInformation.token;
    this.userId = authenticationInformation.userId;
    this.isAuthenticated = true;
    this.authenticationStatusListener.next(true);
  }


  // this removes authentication data from the browser
  // this is called during logout
  private clearAuthenticationData() {
    this.storageService.removeAuthData();
  }

}
