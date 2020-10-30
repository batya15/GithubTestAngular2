import { Component, Input } from '@angular/core';
import { IUser } from '../models/iuser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() user: IUser;

  @Input() avatarRender = true;

  @Input() linkRender = true;
}
