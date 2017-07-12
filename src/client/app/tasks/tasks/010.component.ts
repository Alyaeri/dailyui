import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-010',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class TenComponent {

  taskTitle:string = '010 - Social Share';
  taskDescription:string = 'Social share FAB opening into social media icons';
  taskImage:string = '../images/010.gif';

}
