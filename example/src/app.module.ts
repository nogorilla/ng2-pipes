import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SlugifyPipe } from '../../src/pipes/strings/slugify.pipe';
import { StripTagsPipe } from '../../src/pipes/strings/strip-tags.pipe';
import { TruncatePipe } from '../../src/pipes/strings/truncate.pipe';
import { UcFirstPipe } from '../../src/pipes/strings/ucfirst.pipe';
import { UcWordsPipe } from '../../src/pipes/strings/ucwords.pipe';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    SlugifyPipe,
    StripTagsPipe,
    TruncatePipe,
    UcFirstPipe,
    UcWordsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
