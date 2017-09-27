import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IUser } from './models/iuser';
import { IGithubUser } from './models/igithub-user';
import { SearchResult } from './models/search-result';
import 'rxjs/add/operator/catch';
import { AppState } from '../app.module';
import { Store } from '@ngrx/store';
import { GithubSearchService } from './github-search.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent {
  search: string;
  users: Observable<IUser[]>;
  loading = false;
  errorMsg: string;


  constructor(private service: GithubSearchService, private store: Store<AppState>) {
    this.users = store.select('users');
  }

  // getFromServer(q: string, page: number = 1): Observable<IUser[]> {
  //   // return Observable.of(FAKE_USERS.sort(() => .5 - Math.random()));
  //   const url = `https://api.github.com/search/users`;
  //   const options = {
  //     params: new HttpParams().set('q', q).set('per_page', '10').set('page', String(page)),
  //   };
  //   this.loading = true;
  //   return this.http
  //     .getFromServer<SearchResult>(url, options)
  //     .do(searchRes => {
  //       this.totalItems = searchRes.total_count;
  //       this.currentPage = page;
  //       this.errorMsg = '';
  //     })
  //     .map(searchRes => searchRes.items.map(toIUser))
  //     .catch(e => {
  //       this.errorMsg = 'API is not available';
  //       console.error(e);
  //       return [];
  //     })
  //     .do(_ => this.loading = false);
  // }
}
