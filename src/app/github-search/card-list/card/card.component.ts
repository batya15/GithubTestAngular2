import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() user: IUser;
}
