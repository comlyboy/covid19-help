import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async saveAuthData(token: string, user: IUser) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }


  getAuthData() {
    const token = localStorage.getItem('token');
    return {
      token
    };

  }

  getUserOBJ() {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  }

  async removeAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
