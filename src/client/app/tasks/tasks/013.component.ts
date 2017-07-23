import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-013',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class ThirteenComponent {

  taskTitle:string = '013 - Direct Messaging';
  taskDescription:string = 'A concept of what a Material Design messaging app might look like for desktop';
  taskImage:string = '../images/013.png';

}
