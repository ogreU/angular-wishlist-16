import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from 'src/shared/services/EventService';

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

  constructor() {
    events.listen('removeWish', (wish: any) => {
      //todo: remove wish from list...

      console.log(wish);
    });
  }

  filter: any;
}
