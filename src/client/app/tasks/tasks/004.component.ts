import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-004',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class FourComponent {

  taskTitle:string = '003 - Calculator';
  taskDescription:string = 'Concept calculator for Android OS using Material Design';
  taskImage:string = '../images/004.png';

}
