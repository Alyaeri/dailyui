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
import { EightComponent } from './tasks/008.component';
import { NineComponent } from './tasks/009.component';
import { TenComponent } from './tasks/010.component';
import { ElevenComponent } from './tasks/011.component';

@NgModule({
  imports: [ CommonModule, TasksRoutingModule, SharedModule,  MdTabsModule,
    MdSidenavModule, MdIconModule, MdButtonModule ],
  declarations: [ OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent, SixComponent, SevenComponent, EightComponent, NineComponent, TenComponent, ElevenComponent ],
  exports: []
})
export class TasksModule {
}
