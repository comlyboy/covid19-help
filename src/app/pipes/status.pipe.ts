import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFormat'
})
export class StatusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (!value) {
      return;
    };

    switch (value) {
      case 0:
        return "Is Fake";

      case 1:
        return "New";

      case 2:
        return "Is Contacted";

      case 3:
        return "is Confirmed";

      case 4:
        return "Is Quanrantined";

      default:
        return value
    }

  }

}
