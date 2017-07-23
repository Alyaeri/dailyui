import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-014',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class FourteenComponent {

  taskTitle:string = '014 - Countdown';
  taskDescription:string = 'Material Breathing animation countdown, designed as a yoga app, where the countdown is the remaining duration of the pose';
  taskImage:string = '../images/014.gif';

}
