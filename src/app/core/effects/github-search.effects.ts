import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as githubSearch from '../store/actions/github-search.actions';
import {GithubApiService, GithubApiServiceOptions} from '../services/github-api.service';

import { normalize } from 'normalizr';
import {issuesSchema, repositoriesSchema} from '../constants/schemas';
import {State, getSearchIssuesState} from '../store';

@Injectable()
export class GithubSearchEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private githubApiService: GithubApiService
  ) {}

  @Effect()
  searchIssues$: Observable<Action> = this.actions$
    .ofType(githubSearch.ActionTypes.SEARCH_ISSUES)
    .map(action => action.payload)
    .filter(options => !!options.text)
    .withLatestFrom(this.store.select(getSearchIssuesState))
    .map(data => {
      const [options, store] = data;
      if(options.text && store.text !== null && options.text !== store.text){
        return new githubSearch.ResetIssuesParamsAndSearchAction(options);
      }
      return new githubSearch.PaginatieIssuesAction(options);
    });

  @Effect()
  resetIssuesParamsAndSearch$ = this.actions$
    .ofType(githubSearch.ActionTypes.RESET_ISSUES_PARAMS_AND_SEARCH)
    .map(action => action.payload)
    .map(payload => new githubSearch.PaginatieIssuesAction(payload));

  @Effect()
  paginateIssues$ = this.actions$
    .ofType(githubSearch.ActionTypes.PAGINATE_ISSUES)
    .map(action => action.payload)
    .withLatestFrom(this.store.select(getSearchIssuesState))
    .map(data => {
      const [options, store] = data;
      return <GithubApiServiceOptions>{
        per_page: options.per_page || store.per_page,
        text: options.text || store.text,
        page: options.page || store.page
      }
    })
    .switchMap(search => this.githubApiService
      .searchIssuesByUserAndRepo(search)
      .map(res => {
        const items = {issues: res.items};
        const schema = { issues: [ issuesSchema ] };
        const normalizedData = normalize(items, schema);
        return new githubSearch.SearchSuccessAction(
          Object.assign({}, normalizedData, {
            total: res.total_count
          })
        )
      })
      .catch(err => Observable.of(new githubSearch.SearchFailAction(err))));


  @Effect()
  searchRepo$: Observable<Action> = this.actions$
    .ofType(githubSearch.ActionTypes.SEARCH_REPO)
    .map(action => action.payload)
    .map(str => str.split('/'))
    .filter(arr => arr.length === 2)
    .map(arr => arr[0])
    .debounceTime(300)
    .switchMap(searchStr => this.githubApiService
      .searchReposByUser(searchStr)
      .map(res => {
        const items = {repositories: res.items};
        const schema = { repositories: [ repositoriesSchema ] };
        const normalizedData = normalize(items, schema);
        return new githubSearch.SearchRepoSuccess(normalizedData)
      })
      .catch(err => Observable.of(new githubSearch.SearchRepoFail(err))));

}
