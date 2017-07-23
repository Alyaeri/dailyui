import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-016',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class SixteenComponent {

  taskTitle:string = '016 - Pop up/Overlay';
  taskDescription:string = 'Pop up subscription dialog for a food delivery service';
  taskImage:string = '../images/016.png';

}
