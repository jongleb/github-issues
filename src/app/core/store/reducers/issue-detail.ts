import * as issueDetail from '../actions/issue-detail.actions';

export interface IssueDetailState {
  issue: any;
  loading: boolean;
}

const initialState: IssueDetailState = {
  issue: {},
  loading: false
};

export function issueDetailReducer(state = initialState, action): IssueDetailState {
  switch (action.type) {
    case issueDetail.ActionTypes.FETCH_ISSUE: {
      return Object.assign({}, state, {
        loading: true
      })
    }
    case issueDetail.ActionTypes.FETCH_ISSUE_SUCCESS: {
      return Object.assign({}, state, {
        issue: action.payload,
        loading: false
      })
    }
    case issueDetail.ActionTypes.FETCH_ISSUE_FAIL: {
      return Object.assign({}, state, {
        loading: false
      })
    }
    default: {
      return state;
    }
  }
}

export const getIssue = (state: IssueDetailState) => state.issue;

