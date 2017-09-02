import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GithubSearchModule } from './github-search/github-search.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    GithubSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
