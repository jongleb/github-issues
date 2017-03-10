import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayByLength',
})
export class ArrayByLengthPipe implements PipeTransform {
  transform(value: number) {
    return Array.from(new Array(value), (x,i) => i)
  }
}
