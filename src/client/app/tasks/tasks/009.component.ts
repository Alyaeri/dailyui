import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-009',
  templateUrl: 'template.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class NineComponent {

  taskTitle:string = '009 - Music Player';
  taskDescription:string = 'Revising the concept Music player from the Android Reimagined project in my Portfolio';
  taskImage:string = '../images/009.png';

}
