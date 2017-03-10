import { createSelector } from 'reselect';

import {ActionReducer, StoreModule} from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import { environment } from '../../../environments/environment';


import { storeFreeze } from 'ngrx-store-freeze';

import {NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import * as fromEntities from './reducers/entities';
import * as fromSearch from './reducers/search-issues';
import * as fromIssueDetail from './reducers/issue-detail';

import {mapCollectionToArrayKeys} from '../utils/reducer-util';

export interface State {
  searchIssues: fromSearch.SearchIssuesState
  entities: fromEntities.EntitiesState
  issueDetail: fromIssueDetail.IssueDetailState
}

const reducers = {
  entities: fromEntities.entitiesReducer,
  searchIssues: fromSearch.searchReducer,
  issueDetail: fromIssueDetail.issueDetailReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class CoreStoreModule {}

export const getState = (state: State) => state;

export const getEntitiesState = (state: State) => state.entities;
export const getSearchIssuesState = (state: State) => state.searchIssues;
export const getIssueDetailState = (state: State) => state.issueDetail;

export const getIssueEntities = createSelector(getEntitiesState, fromEntities.getIssuesEntities);
export const getIssueIds = createSelector(getSearchIssuesState, fromSearch.getIssues);

export const getRepositoriesEntities = createSelector(getEntitiesState, fromEntities.getRepositories);
export const getRepositoriesIds = createSelector(getSearchIssuesState, fromSearch.getRepositories);

export const getIssuesList = createSelector(getIssueEntities, getIssueIds, mapCollectionToArrayKeys);
export const getRepositoriesList = createSelector(getRepositoriesEntities, getRepositoriesIds, mapCollectionToArrayKeys);
