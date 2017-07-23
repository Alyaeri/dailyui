import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-020',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class TwentyComponent {

  taskTitle:string = '020 - Location Tracking';
  taskDescription:string = 'Concept past trip journal for a ride sharing sevice';
  taskImage:string = '../images/020.png';

}
