import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-005',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class FiveComponent {

  taskTitle:string = '005 - App Icon';
  taskDescription:string = 'Weather app icon using Material Design';
  taskImage:string = '../images/005.png';

}
