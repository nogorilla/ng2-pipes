import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
  transform(text: string, length: number, suffix: string) {

    if (!text || !isNaN(length)) {
      return text;
    }

    if (text.length <= length || text.length - suffix.length <= length) {
      return text;
    }
    else {
      var shortString = text.substr(0, length);
      return shortString.substr(0, Math.min(length, shortString.lastIndexOf(' ')))+suffix;
    }
  }
}