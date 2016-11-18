import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})

export class UcFirstPipe implements PipeTransform {
  transform(text: string) {
    return text.slice(0,1).toUpperCase() + text.slice(1);
  }
}
