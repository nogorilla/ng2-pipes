import { NgModule } from '@angular/core';

import { SlugifyPipe } from './pipes/strings/slugify.pipe';
import { StripTagsPipe } from './pipes/strings/strip-tags.pipe';
import { TruncatePipe } from './pipes/strings/truncate.pipe';
import { UcFirstPipe } from './pipes/strings/ucfirst.pipe';
import { UcWordsPipe } from './pipes/strings/ucwords.pipe';

@NgModule({
  declarations: [
    SlugifyPipe,
    StripTagsPipe,
    TruncatePipe,
    UcFirstPipe,
    UcWordsPipe
  ],
  exports: []
})
export class PipesModule {
}
