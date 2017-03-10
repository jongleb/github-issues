import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import {SearchIssuesComponent} from './search-issues.component';
import {routing} from './search-issues.routing';
import {PaginationButtonsModule} from '../core/components/pagination-buttons/index';


@NgModule({
  imports: [
    SharedModule,
    PaginationButtonsModule,
    routing
  ],
  declarations: [
    SearchIssuesComponent
  ],
  exports: [
    SearchIssuesComponent
  ],
  providers: []
})
export class SearchIssuesModule { }
