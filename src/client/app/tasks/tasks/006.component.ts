import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-006',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class SixComponent {

  taskTitle:string = '006 - Profile';
  taskDescription:string = 'Concept profile for a shareable social media card';
  taskImage:string = '../images/006.png';

}
