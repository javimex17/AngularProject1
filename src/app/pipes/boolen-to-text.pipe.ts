import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolenToText'
})
export class BoolenToTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
