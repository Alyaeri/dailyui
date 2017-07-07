import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-002',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class TwoComponent {

  taskTitle:string = '002 - Checkout';
  taskDescription:string = 'Concept checkout page for Frends headphones';
  taskImage:string = '../images/002.png';

}
