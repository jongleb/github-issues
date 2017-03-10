import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchIssuesComponent} from './search-issues.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: SearchIssuesComponent }
]);
