import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() user: IUser;
}
