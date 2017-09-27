import * as SearchFormActions from './search-form.actions';

export type Action = SearchFormActions.All;

export function searchFormReducer(state: string = '', action: Action): any {
  switch (action.type) {
    case SearchFormActions.SET: {
      return action.payload ;
    }

    default: {
      return state;
    }
  }
}
