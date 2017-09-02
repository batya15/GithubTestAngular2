import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      q: '',
    });
  }

  onSubmit(event: any) {
    // TODO:
    event.stopPropagation();
    this.submit.emit(this.searchForm.value.q);
  }

}
