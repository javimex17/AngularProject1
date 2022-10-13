import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (value = 'Senior') {
        return 'S'
      }
      if (value = 'Junior') {
        return 'J'
      }
    else return 'J'

  }

}
