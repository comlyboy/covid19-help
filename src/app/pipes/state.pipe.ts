import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateFormat'
})
export class StatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) {
      return;
    }

    switch (value) {
      case 'akwa_ibom':
        return 'Akwa Ibom State';

      case 'abuja':
        return 'FCT';

      case 'cross_river':
        return 'Cross River State';

      default:
        return value
          .replace(/\w\S*/g, (txt => txt[0]
            .toUpperCase() + txt.substr(1)
              .toLowerCase() + ' ' + 'State')
          );
    }
  }

}


