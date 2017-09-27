import * as PaginationActions from './pagination.actions';

export type Action = PaginationActions.All;

export function paginationReducer(state: number = 1, action: Action): any {
  switch (action.type) {
    case PaginationActions.INCREMENT: {
      return state + 1;
    }

    case PaginationActions.DECREMENT: {
      return state - 1;
    }

    case PaginationActions.RESET: {
      return action.payload; // typed to number
    }

    default: {
      return state;
    }
  }
}
