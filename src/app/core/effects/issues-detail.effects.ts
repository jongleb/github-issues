import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as issueDetail from '../store/actions/issue-detail.actions';
import {GithubApiService, GithubApiServiceOptions} from '../services/github-api.service';

import { normalize } from 'normalizr';
import {issuesSchema, repositoriesSchema} from '../constants/schemas';
import {State, getSearchIssuesState} from '../store';

@Injectable()
export class IssuesDetailEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private githubApiService: GithubApiService
  ) {}

  @Effect()
  searchIssueAction$: Observable<Action> = this.actions$
    .ofType(issueDetail.ActionTypes.FETCH_ISSUE)
    .map(action => action.payload)
    .switchMap(search =>  this.githubApiService
      .issueById(search)
      .map(res => new issueDetail.SearchIssueSuccessAction(res))
      .catch(err => Observable.of(new issueDetail.SearchIssueFailAction(err))))
}
