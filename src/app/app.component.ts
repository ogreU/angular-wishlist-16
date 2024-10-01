import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  constructor(events: EventService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  filter: any;
}
