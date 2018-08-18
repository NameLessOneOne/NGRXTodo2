import { Action } from '@ngrx/store';
import * as todoAction from '../actions/todos';

import { ToDo } from '../../models';


export interface State {
  ids: number[];
  todos: Array<ToDo>;
  selected: number;
}

export const initialState: State = {
  ids: [1, 2, 3],
  todos: [
    {
      id: 1,
      title: '',
      description: 'alala',
      completed: false
    },
  ],
  selected: null,
};

export function reducer(state = initialState, action: todoAction.Action) {
  switch (action.type) {
    case todoAction.ADD_ONE: {
      if (!action.payload) { return; }

      const newToDo: ToDo = {
        id: Math.random(),
        title: '',
        description: action.payload,
        completed: false
      };
      console.log('newToDo', newToDo);

      return {
        ...state,
        todos: [...state.todos, newToDo]
      };
    }


    case todoAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }

    case todoAction.DELETE_ONE: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }

    default:
      return state;
  }
}

export const getIds = (state: State) => state.ids;
export const getTodos = (state: State) => state.todos;
export const getSelected = (state: State) => state.selected;

