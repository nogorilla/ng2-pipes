import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'stripTags'
})

export class StripTagsPipe implements PipeTransform {
  transform(text: string): string {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
}