import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  searchForm: FormGroup = new FormGroup({
    q: new FormControl(''),
  });

  onSubmit(event: Event) {
    event.stopPropagation();
    this.submit.emit(this.searchForm.value.q);
  }
}
