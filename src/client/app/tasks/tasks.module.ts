import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MdSidenavModule, MdTabsModule, MdIconModule, MdButtonModule } from '@angular/material';
import { OneComponent } from './tasks/001.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TwoComponent } from './tasks/002.component';
import { ThreeComponent } from './tasks/003.component';
import { FourComponent } from './tasks/004.component';
import { FiveComponent } from './tasks/005.component';
import { SixComponent } from './tasks/006.component';
import { SevenComponent } from './tasks/007.component';

@NgModule({
  imports: [ CommonModule, TasksRoutingModule, SharedModule,  MdTabsModule,
    MdSidenavModule, MdIconModule, MdButtonModule ],
  declarations: [ OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent, SixComponent, SevenComponent ],
  exports: []
})
export class TasksModule {
}
