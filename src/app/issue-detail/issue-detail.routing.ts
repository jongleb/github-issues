import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {IssueDetailComponent} from './issue-detail.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'issue/:owner/:repo/:number', component: IssueDetailComponent }
]);
