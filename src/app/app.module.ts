import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GithubSearchModule } from './github-search/github-search.module';
import { StoreModule } from '@ngrx/store';
import { paginationReducer } from './pagination/pagination.reducer';
import { searchFormReducer } from './github-search/search-form/search-form.reducer';
import { githubSearchReducer } from './github-search/github-search.reducer';
import { IUser } from './github-search/models/iuser';


export interface AppState {
  pagination: number;
  search: string;
  users: IUser[];
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    GithubSearchModule,
    StoreModule.forRoot({
      pagination: paginationReducer,
      search: searchFormReducer,
      users: githubSearchReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
