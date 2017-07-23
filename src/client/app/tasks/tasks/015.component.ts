import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-015',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class FifteenComponent {

  taskTitle:string = '015 - On/off switch';
  taskDescription:string = 'Take on digital an on/off light switch';
  taskImage:string = '../images/015.gif';

}
