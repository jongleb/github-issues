import { Action } from '@ngrx/store';
import {type} from '../../utils/ngrx-action.util';


export const ActionTypes = {
  SEARCH_ISSUES: type('[GithubSearch] Search Issues'),
  SEARCH_NEW_QUERY: type('[GithubSearch] Select New Query'),
  PAGINATE_ISSUES: type('[GithubSearch] Paginate Issues'),
  RESET_ISSUES_PARAMS_AND_SEARCH: type('[GithubSearch] Reset Issues Params And Search'),
  RESET_ISSUES_PARAMS: type('[GithubSearch] Reset Issues Params'),
  SEARCH_SUCCESS: type('[GithubSearch] Search Success'),
  SEARCH_FAIL: type('[GithubSearch] Search Fail'),
  SEARCH_REPO: type('[GithubSearch] Search Repo'),
  SEARCH_REPO_SUCCESS: type('[GithubSearch] Search Repo Success'),
  SEARCH_REPO_FAIL: type('[GithubSearch] Search Repo Fail'),
  ISSUES_SEARCH_PARAMS_CHANGED: type('[GithubSearch] Issues Search Params Changed')
};

export class SearchIssuesAction implements Action {
  type = ActionTypes.SEARCH_ISSUES;
  constructor(public payload: any){}
}

export class ResetIssuesParamsAndSearchAction implements Action {
  type = ActionTypes.RESET_ISSUES_PARAMS_AND_SEARCH;
  constructor(public payload: any){}
}

export class ResetIssuesParams implements Action {
  type = ActionTypes.RESET_ISSUES_PARAMS;
}


export class SearchNewQueryAction implements Action {
  type = ActionTypes.SEARCH_NEW_QUERY;
  constructor(public payload: any){}
}

export class PaginatieIssuesAction implements Action {
  type = ActionTypes.PAGINATE_ISSUES;
  constructor(public payload: any){}
}

export class SearchSuccessAction implements Action {
  type = ActionTypes.SEARCH_SUCCESS;
  constructor(public payload: any){}
}

export class SearchFailAction implements Action {
  type = ActionTypes.SEARCH_FAIL;
  constructor(public payload: any){}
}

export class SearchRepo implements Action {
  type = ActionTypes.SEARCH_REPO;
  constructor(public payload: string){}
}

export class SearchRepoSuccess implements Action {
  type = ActionTypes.SEARCH_REPO_SUCCESS;
  constructor(public payload: any){}
}

export class SearchRepoFail implements Action {
  type = ActionTypes.SEARCH_REPO_FAIL;
  constructor(public payload: any){}
}

export class IssuesSearchParamsChanged implements Action {
  type = ActionTypes.ISSUES_SEARCH_PARAMS_CHANGED;
  constructor(public payload: any){}
}


export type Actions = SearchNewQueryAction
  | SearchSuccessAction
  | SearchFailAction
  | SearchRepo
  | SearchRepoFail
  | SearchRepoSuccess
  | IssuesSearchParamsChanged
  | PaginatieIssuesAction
  | SearchIssuesAction
  | ResetIssuesParamsAndSearchAction
  | ResetIssuesParams;
