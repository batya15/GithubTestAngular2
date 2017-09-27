import { Action } from '@ngrx/store';
import { IUser } from './models/iuser';

export const SET    = '[Users] Set';
export const RESET  = '[Users] Reset';

export class Set implements Action {
  readonly type = SET;

  constructor(public payload: IUser[]) {}
}

export class Reset implements Action {
  readonly type = RESET;

  constructor(public payload: IUser[]) {}
}

export type All
  = Set
  | Reset;
