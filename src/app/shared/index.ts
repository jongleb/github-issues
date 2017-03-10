import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CORE_COMPONENTS } from './components';
import {CORE_PIPES} from "./pipes/index";
import { MarkdownModule } from 'angular2-markdown';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MarkdownModule.forRoot()
  ],
  declarations: [
    ...CORE_COMPONENTS,
    ...CORE_PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,

    ...CORE_COMPONENTS,
    ...CORE_PIPES

  ],
  providers: [

  ]
})
export class SharedModule { }
