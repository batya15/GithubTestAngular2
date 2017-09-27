import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';
import * as SearchForm from './search-form.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    store.select('pagination').combineLatest(store.select('search'));
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      q: '',
    });
  }

  onSubmit(event: any) {
    event.stopPropagation();
    this.store.dispatch(new SearchForm.Set(this.searchForm.value.q));
  }

}
