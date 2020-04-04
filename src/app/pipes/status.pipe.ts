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

      case 1:
        return "New case";

      case 2:
        return "Is Contacted";

      case 3:
        return "Is Confirmed";

      case 4:
        return "Is Quanrantined";

      case 5:
        return "Is Not Sick";

      case 6:
        return "Is Fake";

      default:
        return value
    }

  }

}
