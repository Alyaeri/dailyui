import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-003',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class ThreeComponent {

  taskTitle:string = '003 - Landing Page';
  taskDescription:string = 'Tactiv website landing page';
  taskImage:string = '../images/003.png';

}
