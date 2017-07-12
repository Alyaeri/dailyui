import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-011',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class ElevenComponent {

  taskTitle:string = '011 - Flash Messages';
  taskDescription:string = 'Flash Messages for success & error states';
  taskImage:string = '../images/011.png';

}
