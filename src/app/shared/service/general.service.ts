import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }


  getDevice_type() {
    return [
      { name: "Android", value: "IOS" },
      { name: "IOS", value: "IOS" },
      { name: "Pc", value: "Pc" },
      { name: "Electronics", value: "Electronics" },
      { name: "Windows phone", value: "Windows phone" },
      { name: "Others", value: "Others" }
    ]
  }

  getStatus() {
    return [
      { name: "In progress", value: "In progress" },
      { name: "Repaired", value: "Repaired" },
      { name: "Unrepaired", value: "Unrepaired" },
      { name: "Collected", value: true }
    ]
  }

}
