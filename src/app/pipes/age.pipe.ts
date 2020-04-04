import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalculate'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let today = new Date();
    let birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

}
