import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from 'src/shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  get cssClasses() {
    return {
      'strikeout text-muted': this.wish.isComplete,
    };
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
