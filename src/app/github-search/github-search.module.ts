import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PaginationModule } from '../pagination/pagination.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { GithubSearchComponent } from './github-search.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginationModule,
  ],
  declarations: [
    GithubSearchComponent,
    SearchFormComponent,
    CardComponent,
  ],
  exports: [
    GithubSearchComponent,
  ]
})
export class GithubSearchModule { }
