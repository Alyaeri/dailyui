import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-008',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class EightComponent {

  taskTitle:string = '008 - 404';
  taskDescription:string = '404 concept for Kathmandu clothing store';
  taskImage:string = '../images/008.png';

}
