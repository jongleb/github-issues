import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {APP_CORE_MODULES} from './core/components/index';
import {SharedModule} from './shared';
import {CoreModule} from './core/index';
import {SearchIssuesModule} from './search-issues/index';
import {IssueDetailModule} from './issue-detail/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot([]),
    SearchIssuesModule,
    IssueDetailModule,

    ...APP_CORE_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
