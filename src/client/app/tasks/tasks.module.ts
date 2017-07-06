import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MdSidenavModule, MdTabsModule, MdIconModule, MdButtonModule } from '@angular/material';
import { OneComponent } from './tasks/001.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TwoComponent } from './tasks/002.component';

@NgModule({
  imports: [ CommonModule, TasksRoutingModule, SharedModule,  MdTabsModule,
    MdSidenavModule, MdIconModule, MdButtonModule ],
  declarations: [ OneComponent, TwoComponent ],
  exports: []
})
export class TasksModule {
}
