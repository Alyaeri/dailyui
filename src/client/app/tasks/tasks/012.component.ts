import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-012',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class TwelveComponent {

  taskTitle:string = '012 - Flash Messages';
  taskDescription:string = 'Single product concept page for the new Nike Vapormax';
  taskImage:string = '../images/012.png';

}
