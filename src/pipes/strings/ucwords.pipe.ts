import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucwords'
})

export class UcWordsPipe implements PipeTransform {
  transform(text: string) {
    return text.split(' ')
      .map(sub => sub.slice(0,1).toUpperCase() + sub.slice(1))
      .join(' ')
  }
}
