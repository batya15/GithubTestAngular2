import { Component, Input } from '@angular/core';
import { IUser } from '../models/iuser';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() loading: boolean;
  @Input() users: IUser[];
  @Input() error: string;

  hasError(): boolean {
    return Boolean(this.error);
  }

  isEmpty(): boolean {
    return Boolean(this.users && !this.users.length);
  }
}
