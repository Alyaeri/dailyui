import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-019',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class NineteenComponent {

  taskTitle:string = '019 - Leaderboard';
  taskDescription:string = 'Last.fm scrobble leaderboard concept for IOS app';
  taskImage:string = '../images/019.png';

}
