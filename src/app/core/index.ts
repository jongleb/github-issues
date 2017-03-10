import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {CoreStoreModule} from './store/index';
import {APP_SERVICES} from './services/index';

import {GithubSearchEffects} from './effects/github-search.effects';
import {IssuesDetailEffects} from './effects/issues-detail.effects';


@NgModule({
  imports: [
    CoreStoreModule,
    EffectsModule.run(GithubSearchEffects),
    EffectsModule.run(IssuesDetailEffects)
  ],
  declarations: [
  ],
  exports: [
    CoreStoreModule
  ],
  providers: [
    ...APP_SERVICES
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

  }
}
