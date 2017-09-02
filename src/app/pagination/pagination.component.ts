import { Component, EventEmitter, Input, Output } from '@angular/core';


function calculateTotalPages(totalItems: number, perPage: number): number {
  const totalPages = perPage < 1
    ? 1
    : Math.ceil(totalItems / perPage);
  return Math.max(totalPages || 0, 1);
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() current: number;
  @Input() perPage: number;
  @Input() totalItems: number;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  get pages(): number {
    return calculateTotalPages(this.totalItems, this.perPage);
  }

  isFirstPage(): boolean {
    return this.current === 1;
  }

  isLastPage(): boolean {
    return this.current === calculateTotalPages(this.totalItems, this.perPage);
  }

  selectPage(value: number, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    if (event && event.target) {
      const target: any = event.target;
      target.blur();
    }
    this.current = value;
    this.pageChange.emit(value);
  }
}
