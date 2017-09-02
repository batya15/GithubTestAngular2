import { Component, Input } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() loading: boolean;
  @Input() users: IUser[];
  @Input() error: string;

  hasError() {
    return Boolean(this.error);
  }
}
