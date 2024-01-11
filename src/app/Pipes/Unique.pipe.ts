import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
