import * as GithubSearchActions from './github-search.actions';
import { IUser } from './models/iuser';

export type Action = GithubSearchActions.All;

export function githubSearchReducer(state: IUser[] = [], action: Action): any {
  switch (action.type) {
    case GithubSearchActions.SET: {
      return action.payload;
    }

    case GithubSearchActions.RESET: {
      return [];
    }

    default: {
      return state;
    }
  }
}
