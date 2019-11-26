import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DpImageGridModule } from 'dp-image-grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DpImageGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
