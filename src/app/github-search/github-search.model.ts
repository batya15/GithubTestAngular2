import { WithStateModel } from '../common/with-state/with-state.model';
import { IResponseWithState } from '../common/response-with-state/response-with-state.interface';
import { SearchResult } from './models/search-result';
import { IGithubUser } from './models/igithub-user';
import { IUser } from './models/iuser';
import { EModelState } from '../common/with-state/model-state.enum';

function toIUser(user: IGithubUser): IUser {
  return {
    login: user.login,
    url: user.html_url,
    avatar: user.avatar_url,
  };
}

export class GithubSearchModel extends WithStateModel {
  readonly users: IUser[] = [];
  readonly totalCount: number = 0;
  readonly errorMessage: string = '';
  readonly page: number = 1;

  constructor(
    searchResult: IResponseWithState<SearchResult> = {data: null, state: EModelState.NONE},
  ) {
    super(searchResult.state);
    const { items = [], total_count = 0, page = 1 } = {...searchResult.data};

    this.page = page;
    this.users = items.map(toIUser);
    this.totalCount = total_count;
    if (this.isStateError()) {
      this.errorMessage = searchResult.error;
    }
    console.log(this);
  }
}
