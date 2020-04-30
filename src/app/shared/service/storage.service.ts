import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user';

import { default as data_json } from '../../data/nigeria_states_lgas.json';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async saveAuthData(token: string, user: IUser) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  async saveJSON() {
    localStorage.setItem('state_lga', JSON.stringify(data_json));
  }


  getStateLGA() {
    const state_lga = localStorage.getItem('state_lga');
    if (!state_lga) {
      return null;
    }
    return JSON.parse(state_lga);

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
