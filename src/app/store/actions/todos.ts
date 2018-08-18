import { Action } from '@ngrx/store';
import { ToDo } from '../../models';

export const SELECT = '[Todo] Select';
export const ADD_ONE = '[Todo] Add One';
export const DELETE_ONE = '[Todo] Add One';

export class Select implements Action {
    readonly type = SELECT;

    constructor(public payload: number) { }
}

export class AddOne implements Action {
    readonly type = ADD_ONE;

    constructor(public payload: string) { }
}

export class DeleteOne implements Action {
    readonly type = DELETE_ONE;
    // solve type issue payload
    constructor(public payload: any) { }
}

export type Action = AddOne | Select | DeleteOne;


