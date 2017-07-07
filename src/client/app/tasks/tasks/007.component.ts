import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-007',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class SevenComponent {

  taskTitle:string = '007 - Settings';
  taskDescription:string = 'Concept settings for a ecommerce app';
  taskImage:string = '../images/007.png';

}
