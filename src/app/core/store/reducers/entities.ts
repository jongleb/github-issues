export interface EntitiesState {
  issues: {},
  repositories: {}
}

const initialState: EntitiesState = {
  issues: {},
  repositories: {}
};

export function entitiesReducer(state = initialState, action): EntitiesState {

  if (action.payload && action.payload.entities) {
    return Object.assign({}, state, action.payload.entities);
  }
  return state;
}

export const getIssuesEntities = (state: EntitiesState) => state.issues;
export const getRepositories = (state: EntitiesState) => state.repositories;
