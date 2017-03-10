import * as searchIssues from '../actions/github-search.actions';

export interface SearchIssuesState {
  loadingIssues: boolean;
  loadingRepo: boolean;
  issues: string[];
  repositories: string[];
  per_page: number;
  page: number;
  text: string;
  totalIssues: number;
  typing: boolean;
}

const initialState:SearchIssuesState = {
  loadingIssues: false,
  loadingRepo: false,
  issues: [],
  repositories: [],
  per_page: 5,
  page: 1,
  text: null,
  totalIssues: 0,
  typing: false
};

export function searchReducer(state = initialState, action): SearchIssuesState {
  switch (action.type) {
    case searchIssues.ActionTypes.PAGINATE_ISSUES: {
      return Object.assign({}, state, {loadingIssues: true}, action.payload)
    }
    case searchIssues.ActionTypes.SEARCH_FAIL: {
      return Object.assign({}, state, {loadingIssues: false})
    }
    case searchIssues.ActionTypes.SEARCH_REPO:{
      return Object.assign({}, state, {typing: true})
    }
    case searchIssues.ActionTypes.SEARCH_REPO_SUCCESS:{
      return Object.assign({}, state, {
        loadingRepo: false,
        repositories: action.payload.result.repositories
      })
    }
    case searchIssues.ActionTypes.SEARCH_SUCCESS: {
      return Object.assign({}, state, {
        loadingIssues: false,
        typing: false,
        issues: action.payload.result.issues,
        totalIssues: action.payload.total
      })
    }
    case searchIssues.ActionTypes.RESET_ISSUES_PARAMS_AND_SEARCH: {
      const {page, per_page} = initialState;
      const text = action.payload.text || state.text;
      return Object.assign({}, state, {page, per_page, text})
    }
    default: {
      return state;
    }
  }
}

export const getIssues = (state: SearchIssuesState) => state.issues;
export const getRepositories = (state: SearchIssuesState) => state.repositories;
