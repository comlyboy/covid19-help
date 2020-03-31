import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async saveAuthData(token: string, userId: IUser) {
    localStorage.setItem('token', token);
    // localStorage.setItem('userId', userId);
  }


  getAuthData() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!userId || !token) {
      return null;
    }

    return {
      token,
      userId
    };

  }

  getUserId() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      return null;
    }
    return userId;
  }

  async removeAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
}
