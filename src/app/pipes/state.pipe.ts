import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateFormat'
})
export class StatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (!value) {
      return;
    };

    switch (value) {
      case 'akwa_ibom':
        return "Akwa Ibom State";

      case 'abuja':
        return "Federal Capital Territory";

      case 'cross_river':
        return "Cross River State";

      default:
        return value
          .replace(/\w\S*/g, (txt => txt[0]
            .toUpperCase() + txt.substr(1)
              .toLowerCase() + ' ' + 'State')
          );
    }
  }

}


