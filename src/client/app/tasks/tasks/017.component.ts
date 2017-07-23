import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-017',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class SeventeenComponent {

  taskTitle:string = '017 - Receipt';
  taskDescription:string = 'Urbanears receipt';
  taskImage:string = '../images/017.png';

}
