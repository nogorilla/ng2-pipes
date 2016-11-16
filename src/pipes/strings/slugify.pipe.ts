import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'slugify'
})

export class SlugifyPipe implements PipeTransform {
  transform(input: string): string {
    return input.replace(/[^a-zA-Z0-9_]/g, '-');
  }
}