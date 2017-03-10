import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PaginationButtonsComponent} from './pagination-buttons.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [PaginationButtonsComponent],
  declarations: [PaginationButtonsComponent],
  providers: [],
})
export class PaginationButtonsModule { }
