import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

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
  title = 'Banana';
}
