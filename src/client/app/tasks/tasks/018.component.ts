import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-018',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class EighteenComponent {

  taskTitle:string = '018 - Analytics chart';
  taskDescription:string = 'Minimal but vibrant line chart';
  taskImage:string = '../images/018.png';

}
