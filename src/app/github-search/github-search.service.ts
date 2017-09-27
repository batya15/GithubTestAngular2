import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { AppState } from '../app.module';
import { SearchResult, IGithubUser, IUser } from './models';
import * as Pagination from '../pagination/pagination.actions';
import * as Users from './github-search.actions';


function toIUser(user: IGithubUser): IUser {
  return {
    login: user.login,
    url: user.html_url,
    avatar: user.avatar_url,
  };
}


@Injectable()
export class GithubSearchService {
  page: Observable<number>;
  search: Observable<string>;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.page = store.select('pagination');
    this.search = store.select('search');
    this.search.subscribe(_ => this.store.dispatch(new Pagination.Reset(1)));
    this.search
      .filter(q => q !== '')
      .combineLatest(this.page)
      .switchMap(([search, page]) => this.getFromServer(search, page))
      .map(sr => sr.items.map(toIUser))
      .subscribe((users) => {
        this.store.dispatch(new Users.Set(users));
      });
  }

  private getFromServer(q: string, page: number = 1): Observable<SearchResult> {
    const url = `https://api.github.com/search/users`;
    const options = {
      params: new HttpParams()
        .set('q', q)
        .set('per_page', '10')
        .set('page', String(page)),
    };
    return this.http.get<SearchResult>(url, options);
  }
}
