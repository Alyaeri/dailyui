import { Component, OnInit } from '@angular/core';
import './operators';
import { NavigationEnd, Router } from '@angular/router';
import { accordionAnimation } from './animation-accordion';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [ accordionAnimation ],
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  componentsExpanded: boolean = false;
  componentsState: string = 'inactive';

  layoutExpanded: boolean = false;
  layoutState: string = 'inactive';

  toggleComponents() {
    this.componentsExpanded = !this.componentsExpanded;
    this.componentsState = (this.componentsState === 'inactive' ? 'active' : 'inactive');
  }

  toggleLayout() {
    this.layoutExpanded = !this.layoutExpanded;
    this.layoutState = (this.layoutState === 'inactive' ? 'active' : 'inactive');
  }
}
