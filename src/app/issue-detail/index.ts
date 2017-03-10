import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import {routing} from './issue-detail.routing';
import {PaginationButtonsModule} from '../core/components/pagination-buttons/index';
import {IssueDetailComponent} from './issue-detail.component';


@NgModule({
  imports: [
    SharedModule,
    PaginationButtonsModule,
    routing
  ],
  declarations: [
    IssueDetailComponent
  ],
  exports: [
    IssueDetailComponent
  ],
  providers: []
})
export class IssueDetailModule { }
