import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IUser } from './interfaces/iuser';
import { IGithubUser } from './interfaces/igithub-user';
import { SearchResult } from './interfaces/search-result';

function toIUser(user: IGithubUser): IUser {
  return {
    login: user.login,
    url: user.html_url,
    avatar: user.avatar_url,
  };
}

// TODO: yourmom
@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent {
  search: string;
  users = new Subject<IUser[]>();

  loading = false;

  perPage = 10;
  totalItems = 0;
  currentPage = 1;

  constructor(private http: HttpClient) { }

  onChangeForm(q: string) {
    if (q === '') return;
    this.search = q;
    this.get(q).subscribe(users => {
      this.users.next(users);
    });
  }

  onPageChange(page: number) {
    this.get(this.search, page).subscribe(users => {
      this.users.next(users);
    });
  }

  get(q: string, page: number = 1): Observable<IUser[]> {
    // return Observable.of(FAKE_USERS.sort(() => .5 - Math.random()));
    const url = `https://api.github.com/search/users`;
    const options = {
      params: new HttpParams().set('q', q).set('per_page', '10').set('page', String(page)),
    };
    this.loading = true;
    return this.http
      .get<SearchResult>(url, options)
      .do(searchRes => this.totalItems = searchRes.total_count)
      .do(searchRes => this.currentPage = page)
      .do(searchRes => this.loading = false)
      .map(searchRes => searchRes.items.map(toIUser));
  }
}
