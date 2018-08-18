import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as fromTodos from './todos';

export interface State {
  todos: fromTodos.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodos.reducer
};


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getTodoState = createFeatureSelector<fromTodos.State>('todos');

export const getIds = createSelector(
  getTodoState,
  fromTodos.getIds,
);

export const getTodos = createSelector(
  getTodoState,
  fromTodos.getTodos,
);

export const getSelected = createSelector(
  getTodoState,
  fromTodos.getSelected,
);

export const getSelectedTodo = createSelector(
  getSelected,
  getTodos,
  (selectedId, films) => {
    return {
      ...films[selectedId]
    };
  }
);

export const getAllTodos = createSelector(
  getTodos,
  (todos) => {
    return todos;
  }
);
