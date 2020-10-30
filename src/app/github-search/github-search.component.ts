import { ChangeDetectorRef, Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SearchResult } from './models/search-result';
import { GithubSearchModel } from './github-search.model';
import { responseWithState } from '../common/response-with-state';

import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/scan';
import {EModelState} from '../common/with-state';


@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent {
  model$: Observable<GithubSearchModel>;
  changeForm$: Subject<string> = new Subject<string>();
  changePage$: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient, private chRef: ChangeDetectorRef) {
    this.model$ = this.changeForm$
      .filter(q => q !== '')
      .switchMap(q => this.changePage$
        .startWith(1)
        .switchMap(page => this.getUsers(q, page)
          .let(responseWithState)
        )
      )
      .scan((acc, searchRes) => searchRes.state === EModelState.PENDING && acc.data ? {state: searchRes.state, data: acc.data} : searchRes)
      .map(searchRes => new GithubSearchModel(searchRes))
      .startWith(new GithubSearchModel());
  }

  onChangeForm(q: string) {
    this.changeForm$.next(q);
  }

  onPageChange(page: number) {
    this.changePage$.next(page);
  }

  getUsers(q: string = '', page: number = 1): Observable<SearchResult> {
    const url = `https://api.github.com/search/users`;
    return this.http
      .get<SearchResult>(url, {
        params: new HttpParams()
          .set('q', q ? q.slice(0, -1) : q)
          .set('per_page', '10')
          .set('page', String(page)),
      })
      .map(searchRes => Object.assign(searchRes, {page}))
      .takeWhile(() => q !== '');
  }

  change() {
    this.chRef.markForCheck();
  }
}
