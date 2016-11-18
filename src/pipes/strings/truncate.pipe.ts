import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
  transform(text: string, length: number, suffix: string) {

    let result = text;

    if (!text || !isNaN(length)) {
      result = text;
    }

    if (text.length <= length || text.length - suffix.length <= length) {
      result = text;
    }
    else {
      let shortString = text.substr(0, length);
      result = shortString.substr(0, Math.min(length, shortString.lastIndexOf(' '))) + suffix;
    }

    return result

  }
}
