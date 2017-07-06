import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-001',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class OneComponent {

  taskTitle:string = '001 - Register';
  taskDescription:string = 'A registration page for an app using my personal identity styling';
  taskImage:string = '../images/001.png';

}
