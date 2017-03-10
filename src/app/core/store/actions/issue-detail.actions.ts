import { Action } from '@ngrx/store';
import {type} from '../../utils/ngrx-action.util';


export const ActionTypes = {
  FETCH_ISSUE: type('[IssueDetail] Fetch Issue'),
  FETCH_ISSUE_SUCCESS: type('[IssueDetail] Fetch Issue Success'),
  FETCH_ISSUE_FAIL: type('[IssueDetail] Fetch Issue Fail'),
};

export class SearchIssueAction implements Action {
  type = ActionTypes.FETCH_ISSUE;
  constructor(public payload: any){}
}

export class SearchIssueSuccessAction implements Action {
  type = ActionTypes.FETCH_ISSUE_SUCCESS;
  constructor(public payload: any){}
}

export class SearchIssueFailAction implements Action {
  type = ActionTypes.FETCH_ISSUE_FAIL;
  constructor(public payload: any){}
}


export type Actions = SearchIssueAction
| SearchIssueSuccessAction
| SearchIssueFailAction;
