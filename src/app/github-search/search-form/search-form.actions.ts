import { Action } from '@ngrx/store';

export const SET    = '[SearchForm] Set';
export const RESET  = '[SearchForm] Reset';

export class Set implements Action {
  readonly type = SET;

  constructor(public payload: number) {}
}

export class Reset implements Action {
  readonly type = RESET;

  constructor(public payload: number) {}
}

export type All
  = Set
  | Reset;
